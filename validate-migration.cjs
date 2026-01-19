const fs = require('fs');
const path = require('path');

console.log('🔍 Validating Next.js Migration...\n');

const checks = [];

// Check 1: Next.js installed
try {
  const pkgPath = path.join(__dirname, 'node_modules', 'next', 'package.json');
  const nextPkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  checks.push({ name: 'Next.js installed', pass: true, detail: `v${nextPkg.version}` });
} catch (e) {
  checks.push({ name: 'Next.js installed', pass: false, detail: 'Run: npm install' });
}

// Check 2: React version
try {
  const pkgPath = path.join(__dirname, 'node_modules', 'react', 'package.json');
  const reactPkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  const version = reactPkg.version;
  const isCorrect = version.startsWith('18.');
  checks.push({ name: 'React 18.x installed', pass: isCorrect, detail: `v${version}` });
} catch (e) {
  checks.push({ name: 'React 18.x installed', pass: false, detail: 'Run: npm install' });
}

// Check 3: next.config.js exists
const nextConfigExists = fs.existsSync(path.join(__dirname, 'next.config.js'));
checks.push({ name: 'next.config.js exists', pass: nextConfigExists, detail: nextConfigExists ? '✓' : 'Missing' });

// Check 4: src/app directory exists
const appDirExists = fs.existsSync(path.join(__dirname, 'src', 'app'));
checks.push({ name: 'src/app directory exists', pass: appDirExists, detail: appDirExists ? '✓' : 'Missing' });

// Check 5: src/app/layout.tsx exists
const layoutExists = fs.existsSync(path.join(__dirname, 'src', 'app', 'layout.tsx'));
checks.push({ name: 'Root layout exists', pass: layoutExists, detail: layoutExists ? '✓' : 'Missing' });

// Check 6: Vite files removed
const viteConfigExists = fs.existsSync(path.join(__dirname, 'vite.config.ts'));
const indexHtmlExists = fs.existsSync(path.join(__dirname, 'index.html'));
const mainTsxExists = fs.existsSync(path.join(__dirname, 'src', 'main.tsx'));
const allRemoved = !viteConfigExists && !indexHtmlExists && !mainTsxExists;
checks.push({ name: 'Vite files removed', pass: allRemoved, detail: allRemoved ? '✓' : 'Some remain' });

// Check 7: No react-router-dom imports
function checkForReactRouter(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && file !== 'node_modules' && file !== '.git' && file !== '.next') {
      if (checkForReactRouter(filePath)) return true;
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('react-router-dom')) {
        return true;
      }
    }
  }
  return false;
}

const hasReactRouter = checkForReactRouter(path.join(__dirname, 'src'));
checks.push({ name: 'No react-router imports', pass: !hasReactRouter, detail: hasReactRouter ? 'Found some!' : '✓' });

// Print results
console.log('Validation Results:\n');
checks.forEach((check, i) => {
  const icon = check.pass ? '✅' : '❌';
  console.log(`${icon} ${check.name}: ${check.detail}`);
});

const allPassed = checks.every(c => c.pass);
console.log('\n' + '='.repeat(50));
if (allPassed) {
  console.log('✅ All checks passed! Migration looks good.');
  console.log('\nNext steps:');
  console.log('1. Run: npm run dev');
  console.log('2. Visit: http://localhost:3000');
  console.log('3. Test navigation and features');
} else {
  console.log('⚠️  Some checks failed. Please review above.');
  console.log('\nRecommended actions:');
  console.log('1. Run: npm install');
  console.log('2. Check TROUBLESHOOTING.md');
}
console.log('='.repeat(50) + '\n');
