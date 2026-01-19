const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Testing Next.js dev server...\n');

const devServer = spawn('npm', ['run', 'dev'], {
  cwd: __dirname,
  shell: true,
  stdio: 'pipe'
});

let output = '';
let hasError = false;
let isReady = false;

devServer.stdout.on('data', (data) => {
  const text = data.toString();
  output += text;
  console.log(text);

  if (text.includes('Ready in') || text.includes('Local:')) {
    isReady = true;
  }
});

devServer.stderr.on('data', (data) => {
  const text = data.toString();
  output += text;
  console.error(text);

  if (text.includes('Error') || text.includes('error')) {
    hasError = true;
  }
});

// Give it 30 seconds to start
setTimeout(() => {
  devServer.kill();

  console.log('\n' + '='.repeat(60));
  if (isReady && !hasError) {
    console.log('✅ SUCCESS! Dev server started without errors.');
    console.log('\nNext steps:');
    console.log('1. Run: npm run dev');
    console.log('2. Visit: http://localhost:3000');
    console.log('3. Test all routes and features');
  } else if (hasError) {
    console.log('❌ ERRORS DETECTED');
    console.log('\nCheck the output above for details.');
    console.log('Common fixes:');
    console.log('- Run: npm install');
    console.log('- Check TROUBLESHOOTING.md');
  } else {
    console.log('⏳ Server is starting...');
    console.log('Run "npm run dev" manually to see full output.');
  }
  console.log('='.repeat(60));

  process.exit(isReady && !hasError ? 0 : 1);
}, 30000);

devServer.on('error', (error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
