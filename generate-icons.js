#!/usr/bin/env node
const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function makeIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = '#0a0a0a';
  ctx.roundRect(0, 0, size, size, size * 0.22);
  ctx.fill();
  
  // Accent circle
  ctx.fillStyle = '#c8b89a';
  const cx = size * 0.5, cy = size * 0.46, r = size * 0.28;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  
  // Inner dark circle
  ctx.fillStyle = '#0a0a0a';
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.65, 0, Math.PI * 2);
  ctx.fill();
  
  // Dot
  ctx.fillStyle = '#c8b89a';
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.18, 0, Math.PI * 2);
  ctx.fill();

  return canvas.toBuffer('image/png');
}

try {
  fs.writeFileSync(path.join(dir, 'icon-192.png'), makeIcon(192));
  fs.writeFileSync(path.join(dir, 'icon-512.png'), makeIcon(512));
  console.log('Icons generated');
} catch(e) {
  // If canvas not available, create placeholder
  console.log('Canvas not available, skipping icon generation');
}
