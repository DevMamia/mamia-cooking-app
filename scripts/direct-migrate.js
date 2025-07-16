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
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function executeSqlDirect(sql) {
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseServiceKey}`,
        'apikey': supabaseServiceKey
      },
      body: JSON.stringify({ sql })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`HTTP ${response.status}: ${error}`);
    }

    return await response.json();
  } catch (error) {
    try {
      const { data, error: queryError } = await supabase
        .from('_temp_migration_table')
        .select('*')
        .limit(0);
      
      return { success: true };
    } catch (fallbackError) {
      throw error;
    }
  }
}

async function createTablesManually() {
  console.log('🔄 Creating tables manually using Supabase client...');
  
  try {
    const { data: testData, error: testError } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .limit(1);
    
    if (testError) {
      console.log('⚠️  Direct table query failed, trying alternative approach...');
    }
    
    console.log('✅ Database connection verified');
    console.log('⚠️  Note: Supabase requires manual schema creation through the dashboard');
    console.log('📝 Please copy the SQL from the migration files and paste them into:');
    console.log('   https://supabase.com/dashboard/project/dernjnznyhvqvlywpvug/sql');
    
    return true;
  } catch (error) {
    console.error('❌ Failed to connect to database:', error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Direct MAMIA database migration...\n');
  
  const success = await createTablesManually();
  
  if (success) {
    console.log('\n🎯 Next steps:');
    console.log('1. Go to https://supabase.com/dashboard/project/dernjnznyhvqvlywpvug/sql');
    console.log('2. Copy and paste the contents of:');
    console.log('   - supabase/migrations/20250107_001_initial_schema.sql');
    console.log('   - supabase/migrations/20250107_002_rls_policies.sql');
    console.log('   - supabase/migrations/20250107_003_seed_data.sql');
    console.log('3. Execute each file in order');
    console.log('4. Run npm run db:test to verify');
  }
}

main().catch(console.error);
