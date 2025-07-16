#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  console.error('Please ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_KEY are set in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function executeSqlFile(filename) {
  console.log(`🔄 Executing ${filename}...`);
  
  try {
    const filePath = path.join(__dirname, '..', 'supabase', 'migrations', filename);
    const sql = fs.readFileSync(filePath, 'utf8');
    
    const statements = sql
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));
    
    console.log(`  Found ${statements.length} SQL statements`);
    
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      if (statement.trim()) {
        try {
          const { error } = await supabase.rpc('exec', { sql: statement + ';' });
          if (error && !error.message.includes('already exists')) {
            console.log(`  ⚠️  Statement ${i + 1} warning: ${error.message.substring(0, 100)}...`);
          }
        } catch (err) {
          console.log(`  ⚠️  Statement ${i + 1} error: ${err.message.substring(0, 100)}...`);
        }
      }
    }
    
    console.log(`✅ Completed ${filename}`);
    return true;
  } catch (err) {
    console.error(`❌ Failed to execute ${filename}:`, err.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Simple MAMIA database migration...\n');
  
  const files = [
    '20250107_001_initial_schema.sql',
    '20250107_002_rls_policies.sql',
    '20250107_003_seed_data.sql'
  ];
  
  for (const file of files) {
    await executeSqlFile(file);
    console.log('');
  }
  
  console.log('🎉 Migration attempt completed!');
  console.log('Run npm run db:test to verify the results.');
}

main().catch(console.error);
