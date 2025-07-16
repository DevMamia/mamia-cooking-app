#!/usr/bin/env node

const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !serviceKey) {
  console.error('❌ Missing Supabase environment variables');
  process.exit(1);
}

const urlMatch = supabaseUrl.match(/https:\/\/([^.]+)\.supabase\.co/);
if (!urlMatch) {
  console.error('❌ Invalid Supabase URL format');
  process.exit(1);
}

const projectRef = urlMatch[1];

const client = new Client({
  host: `db.${projectRef}.supabase.co`,
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: serviceKey.split('.')[2] ? 'your-db-password' : serviceKey, // This might need adjustment
  ssl: { rejectUnauthorized: false }
});

async function executeSqlFile(filename) {
  console.log(`🔄 Executing ${filename}...`);
  
  try {
    const filePath = path.join(__dirname, '..', 'supabase', 'migrations', filename);
    const sql = fs.readFileSync(filePath, 'utf8');
    
    const result = await client.query(sql);
    console.log(`✅ Successfully executed ${filename}`);
    return true;
  } catch (error) {
    console.error(`❌ Error executing ${filename}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 PostgreSQL direct migration for MAMIA...\n');
  
  try {
    await client.connect();
    console.log('✅ Connected to PostgreSQL database');
    
    const files = [
      '20250107_001_initial_schema.sql',
      '20250107_002_rls_policies.sql',
      '20250107_003_seed_data.sql'
    ];
    
    for (const file of files) {
      const success = await executeSqlFile(file);
      if (!success) {
        console.log('❌ Migration failed, stopping...');
        break;
      }
    }
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.log('\n💡 Alternative approach needed:');
    console.log('1. Go to https://supabase.com/dashboard/project/dernjnznyhvqvlywpvug/sql');
    console.log('2. Copy and paste the SQL from each migration file manually');
  } finally {
    await client.end();
  }
}

main().catch(console.error);
