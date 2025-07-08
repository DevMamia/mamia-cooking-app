#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const ts = new Date().toISOString().replace(/[:.]/g,'');
const short = ts.slice(0,15);

const changed = execSync('git status --short').toString().trim() || '— clean —';
const lastCommit = execSync('git rev-parse --short HEAD').toString().trim();
const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

const adrDir = 'docs/adr';
const sessionDir = '.claude/sessions';
fs.mkdirSync(adrDir,{recursive:true});
fs.mkdirSync(sessionDir,{recursive:true});

const adrPath = `${adrDir}/${short}-session-handoff.md`;
const sesPath = `${sessionDir}/${short}-pickup.md`;

const body = `# Session hand-off ${short}

| Field | Value |
|-------|-------|
| Branch | ${branch} |
| Last commit | ${lastCommit} |
| Changed files | \n\`\`\`\n${changed}\n\`\`\` |
| Checklist delta | _none_ |

## Next steps
- [ ] Continue current feature
- [ ] Tick items in .claude-checklist.yml
`;

fs.writeFileSync(adrPath, body);
fs.writeFileSync(sesPath, `See ${adrPath}`);

console.log(`📝  Hand-off written → ${adrPath}`); 