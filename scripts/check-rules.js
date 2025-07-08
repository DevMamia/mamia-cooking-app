#!/usr/bin/env node
/**
 * Enhanced checklist validator for local CI.
 * – ensures Node version
 * – runs security audit
 * – runs lint & tests
 * – checks bundle size
 * – validates env vars
 */
import fs from 'fs';
import { execSync } from 'child_process';

let errors = 0;

function checkRule(name, condition, message) {
  if (condition) {
    console.log(`✅  ${name}`);
  } else {
    console.error(`❌  ${name}: ${message}`);
    errors++;
  }
}

// Node version check
const major = parseInt(process.version.match(/^v(\d+)/)[1]);
checkRule('Node version', major === 18 || major === 22, `Node ${major} detected. 18 or 22 required.`);

// Security audit
try {
  const auditResult = execSync('npm audit --audit-level=high', { encoding: 'utf8' });
  checkRule('Security audit', auditResult.includes('found 0 vulnerabilities'), 'High/critical vulnerabilities found');
} catch (e) {
  if (e.status === 1) {
    checkRule('Security audit', false, 'High/critical vulnerabilities found');
  }
}

// Environment variables check
try {
  const envExample = fs.readFileSync('.env.local.example', 'utf8');
  const envLocal = fs.existsSync('.env.local') ? fs.readFileSync('.env.local', 'utf8') : '';
  
  const requiredVars = envExample.match(/^[A-Z_]+=.*/gm) || [];
  const missingVars = requiredVars.filter(line => {
    const varName = line.split('=')[0];
    return !envLocal.includes(varName) && !process.env[varName];
  });
  
  checkRule('Environment variables', missingVars.length === 0, 
    `Missing: ${missingVars.map(v => v.split('=')[0]).join(', ')}`);
} catch (e) {
  checkRule('Environment variables', false, '.env.local.example not found');
}

// Bundle size check (if build exists)
try {
  const stats = fs.statSync('.next/static/chunks/pages/_app.js');
  const sizeKB = Math.round(stats.size / 1024);
  checkRule('Bundle size', sizeKB <= 150, `${sizeKB}KB > 150KB limit`);
} catch (e) {
  console.log('ℹ️   Bundle size check skipped (no build found)');
}

// Lint and test
try {
  execSync('npm run lint', { stdio: 'pipe' });
  checkRule('Linting', true, '');
} catch (e) {
  checkRule('Linting', false, 'ESLint errors found');
}

// TypeScript check (moved up for reliability)
try {
  execSync('npx tsc --noEmit', { stdio: 'pipe' });
  checkRule('TypeScript', true, '');
} catch (e) {
  checkRule('TypeScript', false, 'Type errors found');
}

// Build check
try {
  execSync('npm run build', { stdio: 'pipe' });
  checkRule('Build', true, '');
} catch (e) {
  checkRule('Build', false, 'Build errors found');
}

// Component library check
try {
  const componentsIndex = fs.readFileSync('src/components/ui/index.ts', 'utf8');
  const componentCount = (componentsIndex.match(/export \* from/g) || []).length;
  checkRule('Component library', componentCount >= 10, `Only ${componentCount} components exported`);
} catch (e) {
  checkRule('Component library', false, 'Component index not found');
}

// Database migration check
try {
  const migrationFiles = fs.readdirSync('supabase/migrations').length;
  checkRule('Database migrations', migrationFiles > 0, 'No migration files found');
} catch (e) {
  checkRule('Database migrations', false, 'Migration directory not found');
}

// Test check
try {
  execSync('npm test', { stdio: 'pipe' });
  checkRule('Tests', true, '');
} catch (e) {
  checkRule('Tests', false, 'Test failures found');
}

// Summary
console.log('\n' + '='.repeat(50));
if (errors === 0) {
  console.log('🎉  All checks passed!');
  console.log('✅  Ready for deployment');
} else {
  console.log(`❌  ${errors} check(s) failed`);
  console.log('🔧  Fix issues before deploying');
  process.exit(1);
} 