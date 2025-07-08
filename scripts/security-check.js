#!/usr/bin/env node
/**
 * Comprehensive security check for MAMIA
 * - Scans for exposed secrets
 * - Validates API security patterns
 * - Checks database security
 * - Verifies authentication flows
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

let securityIssues = 0;

function securityCheck(name, condition, severity, message) {
  const icon = condition ? '✅' : (severity === 'critical' ? '🚨' : '⚠️');
  const prefix = condition ? '' : `${severity.toUpperCase()}: `;
  
  if (condition) {
    console.log(`${icon}  ${name}`);
  } else {
    console.error(`${icon}  ${prefix}${name}: ${message}`);
    securityIssues++;
  }
}

function scanFileForSecrets(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const secrets = [
      /sk-[a-zA-Z0-9]{32,}/g,  // OpenAI API keys
      /xoxb-[0-9]{11,}/g,      // Slack bot tokens
      /ghp_[a-zA-Z0-9]{36}/g,  // GitHub tokens
      /AKIA[0-9A-Z]{16}/g,     // AWS access keys
      /AIza[0-9A-Za-z-_]{35}/g, // Google API keys
    ];
    
    for (const pattern of secrets) {
      if (pattern.test(content)) {
        return true;
      }
    }
    return false;
  } catch (e) {
    return false;
  }
}

function scanDirectoryForSecrets(dir) {
  const excludeDirs = ['node_modules', '.git', '.next', 'dist', 'build'];
  const files = [];
  
  function walkDir(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !excludeDirs.includes(item)) {
          walkDir(fullPath);
        } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx'))) {
          if (scanFileForSecrets(fullPath)) {
            files.push(fullPath);
          }
        }
      }
    } catch (e) {
      // Skip directories we can't read
    }
  }
  
  walkDir(dir);
  return files;
}

console.log('🔒 Running MAMIA Security Check...\n');

// 1. Secret scanning
const filesWithSecrets = scanDirectoryForSecrets('.');
securityCheck(
  'No exposed secrets in code',
  filesWithSecrets.length === 0,
  'critical',
  `Potential secrets found in: ${filesWithSecrets.join(', ')}`
);

// 2. Environment file checks
function checkEnvFileSecurity() {
  try {
    // Check if .gitignore exists and contains .env patterns
    const gitignore = fs.existsSync('.gitignore') ? fs.readFileSync('.gitignore', 'utf8') : '';
    const hasEnvInGitignore = gitignore.includes('.env') || gitignore.includes('*.env*');
    
    // Check if .env.local.example exists (template file)
    const hasEnvExample = fs.existsSync('.env.local.example') || fs.existsSync('.env.example');
    
    return hasEnvInGitignore && hasEnvExample;
  } catch (e) {
    return false;
  }
}

securityCheck(
  'Environment files properly configured',
  checkEnvFileSecurity(),
  'medium',
  'Ensure .env files are in .gitignore and .env.example exists'
);

// 3. Package vulnerabilities
try {
  execSync('npm audit --audit-level=moderate', { stdio: 'pipe' });
  securityCheck('No package vulnerabilities', true, 'high', '');
} catch (e) {
  securityCheck('No package vulnerabilities', false, 'high', 'Run npm audit for details');
}

// 4. API route security patterns
function checkApiSecurity() {
  const apiDir = 'src/app/api';
  if (!fs.existsSync(apiDir)) return [];
  
  const issues = [];
  
  function checkApiFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for rate limiting (in file or via middleware)
      const hasMiddleware = fs.existsSync('middleware.ts') || fs.existsSync('middleware.js');
      if (!content.includes('rateLimit') && !content.includes('rate-limit') && !hasMiddleware) {
        issues.push(`${filePath}: Missing rate limiting`);
      }
      
      // Check for input validation
      if (!content.includes('zod') && !content.includes('validate') && content.includes('req.body')) {
        issues.push(`${filePath}: Missing input validation`);
      }
      
      // Check for SQL injection patterns
      if (content.includes('`SELECT') || content.includes('`INSERT') || content.includes('`UPDATE')) {
        issues.push(`${filePath}: Potential SQL injection risk`);
      }
      
    } catch (e) {
      // Skip files we can't read
    }
  }
  
  function walkApiDir(dir) {
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkApiDir(fullPath);
        } else if (item.endsWith('.ts') || item.endsWith('.js')) {
          checkApiFile(fullPath);
        }
      }
    } catch (e) {
      // Skip directories we can't read
    }
  }
  
  walkApiDir(apiDir);
  return issues;
}

const apiIssues = checkApiSecurity();
securityCheck(
  'API routes follow security patterns',
  apiIssues.length === 0,
  'high',
  `Issues found: ${apiIssues.join('; ')}`
);

// 5. Database security
securityCheck(
  'RLS policies exist',
  fs.existsSync('supabase/migrations') && 
  fs.readdirSync('supabase/migrations').some(f => f.includes('rls')),
  'critical',
  'No RLS policy migration found'
);

// 6. Authentication security
function checkAuthSecurity() {
  const authFiles = ['src/app/(auth)', 'src/lib/auth', 'middleware.ts'];
  const issues = [];
  
  for (const authPath of authFiles) {
    if (fs.existsSync(authPath)) {
      try {
        const content = fs.readFileSync(authPath, 'utf8');
        
        // Check for secure session handling
        if (content.includes('session') && !content.includes('httpOnly')) {
          issues.push(`${authPath}: Session cookies should be httpOnly`);
        }
        
        // Check for CSRF protection
        if (content.includes('POST') && !content.includes('csrf')) {
          issues.push(`${authPath}: Missing CSRF protection`);
        }
        
      } catch (e) {
        // Skip if not a file
      }
    }
  }
  
  return issues;
}

const authIssues = checkAuthSecurity();
securityCheck(
  'Authentication follows security best practices',
  authIssues.length === 0,
  'high',
  `Issues: ${authIssues.join('; ')}`
);

// 7. HTTPS enforcement
const nextConfig = fs.existsSync('next.config.ts') ? fs.readFileSync('next.config.ts', 'utf8') : 
                   fs.existsSync('next.config.js') ? fs.readFileSync('next.config.js', 'utf8') : '';
securityCheck(
  'Security headers configured',
  nextConfig.includes('headers') || nextConfig.includes('security'),
  'medium',
  'Add security headers in next.config.ts'
);

// 8. Content Security Policy
securityCheck(
  'CSP headers recommended',
  nextConfig.includes('Content-Security-Policy'),
  'medium',
  'Consider adding CSP headers for XSS protection'
);

// 9. Dependency security
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const hasSecurityDeps = packageJson.dependencies?.['helmet'] || 
                         packageJson.dependencies?.['cors'] ||
                         packageJson.devDependencies?.['@types/bcrypt'];
  
  securityCheck(
    'Security dependencies present',
    hasSecurityDeps,
    'medium',
    'Consider adding security middleware (helmet, cors, etc.)'
  );
} catch (e) {
  securityCheck('Security dependencies present', false, 'medium', 'Could not read package.json');
}

// 10. File upload security (if applicable)
const uploadPatterns = ['multer', 'formidable', 'upload'];
let hasUploads = false;
let hasUploadSecurity = false;

for (const pattern of uploadPatterns) {
  try {
    execSync(`grep -r "${pattern}" src/app/ src/lib/ --include="*.ts" --include="*.js"`, { stdio: 'pipe' });
    hasUploads = true;
    
    // Check for file type validation
    execSync(`grep -r "mimetype\\|fileFilter\\|limits" src/app/ src/lib/ --include="*.ts" --include="*.js"`, { stdio: 'pipe' });
    hasUploadSecurity = true;
    break;
  } catch (e) {
    // Pattern not found
  }
}

if (hasUploads) {
  securityCheck(
    'File upload security implemented',
    hasUploadSecurity,
    'high',
    'File uploads need type validation and size limits'
  );
}

// Summary
console.log('\n' + '='.repeat(50));
if (securityIssues === 0) {
  console.log('🔒 Security check passed!');
  console.log('✅ No critical security issues found');
} else {
  console.log(`🚨 ${securityIssues} security issue(s) found`);
  console.log('🔧 Review and fix security issues before deployment');
  
  console.log('\n📋 Security Checklist:');
  console.log('  • Run npm audit and fix vulnerabilities');
  console.log('  • Never commit .env files');
  console.log('  • Add rate limiting to API routes');
  console.log('  • Validate all user inputs');
  console.log('  • Use parameterized database queries');
  console.log('  • Implement proper session security');
  console.log('  • Add security headers');
  console.log('  • Test RLS policies thoroughly');
  
  process.exit(1);
} 