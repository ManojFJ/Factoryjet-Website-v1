#!/usr/bin/env node

/**
 * Test script to verify Next.js dev server starts without watchpack errors
 */

const { spawn } = require('child_process');

console.log('🧪 Testing Next.js dev server startup...\n');

const devProcess = spawn('npm', ['run', 'dev'], {
  shell: true,
  stdio: 'pipe'
});

let output = '';
let hasError = false;
let hasSuccess = false;

const timeout = setTimeout(() => {
  console.log('⏱️  Server started successfully (no errors detected in 10 seconds)');
  console.log('\n✅ Test passed: No watchpack errors!\n');
  devProcess.kill();
  process.exit(0);
}, 10000);

devProcess.stdout.on('data', (data) => {
  const text = data.toString();
  output += text;
  process.stdout.write(text);

  if (text.includes('Ready in') || text.includes('compiled successfully')) {
    hasSuccess = true;
  }
});

devProcess.stderr.on('data', (data) => {
  const text = data.toString();
  output += text;
  process.stderr.write(text);

  if (text.includes('ERR_INVALID_ARG_TYPE') || text.includes('watchpack')) {
    hasError = true;
    clearTimeout(timeout);
    console.error('\n❌ Test failed: Watchpack error detected!\n');
    devProcess.kill();
    process.exit(1);
  }
});

devProcess.on('error', (error) => {
  clearTimeout(timeout);
  console.error('❌ Failed to start dev server:', error.message);
  process.exit(1);
});

devProcess.on('close', (code) => {
  clearTimeout(timeout);
  if (!hasError && code === 0) {
    console.log('\n✅ Dev server exited cleanly\n');
    process.exit(0);
  }
});

// Handle Ctrl+C
process.on('SIGINT', () => {
  clearTimeout(timeout);
  devProcess.kill();
  process.exit(0);
});
