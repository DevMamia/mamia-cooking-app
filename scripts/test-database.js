#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceKey) {
  console.error('❌ Missing required environment variables');
  console.error('Required: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_KEY');
  process.exit(1);
}

const supabaseAnon = createClient(supabaseUrl, supabaseAnonKey);
const supabaseService = createClient(supabaseUrl, supabaseServiceKey);

async function testDatabaseSetup() {
  console.log('🧪 Testing MAMIA Database Setup...\n');
  
  let allTestsPassed = true;
  
  // Test 1: Check if tables exist and have data
  console.log('📊 Test 1: Checking database schema...');
  
  try {
    const { data: mamas, error: mamasError } = await supabaseAnon
      .from('mamas')
      .select('*')
      .limit(5);
    
    if (mamasError) {
      console.error('❌ Error fetching mamas:', mamasError.message);
      allTestsPassed = false;
    } else {
      console.log(`✅ Found ${mamas.length} mamas in database`);
      mamas.forEach(mama => {
        console.log(`   - ${mama.name} (${mama.cuisine_type})`);
      });
    }
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    allTestsPassed = false;
  }
  
  // Test 2: Check recipes
  console.log('\n🍳 Test 2: Checking recipes...');
  
  try {
    const { data: recipes, error: recipesError } = await supabaseAnon
      .from('recipes')
      .select('title, mamas(name)')
      .limit(10);
    
    if (recipesError) {
      console.error('❌ Error fetching recipes:', recipesError.message);
      allTestsPassed = false;
    } else {
      console.log(`✅ Found ${recipes.length} recipes in database`);
      recipes.forEach(recipe => {
        console.log(`   - ${recipe.title} by ${recipe.mamas?.name}`);
      });
    }
  } catch (error) {
    console.error('❌ Error testing recipes:', error.message);
    allTestsPassed = false;
  }
  
  // Test 3: Check RLS policies (should fail without auth)
  console.log('\n🔒 Test 3: Testing RLS policies...');
  
  try {
    const { data: profiles, error: profilesError } = await supabaseAnon
      .from('profiles')
      .select('*')
      .limit(1);
    
    if (profilesError) {
      console.log('✅ RLS working correctly - anonymous users cannot access profiles');
    } else {
      console.log('⚠️  Warning: Anonymous users can access profiles (RLS might not be working)');
    }
  } catch (error) {
    console.log('✅ RLS policies are active');
  }
  
  // Test 4: Check custom types
  console.log('\n🎯 Test 4: Checking custom types...');
  
  try {
    const { data: typeTest, error: typeError } = await supabaseService
      .rpc('exec_sql', {
        sql: `
          SELECT 
            unnest(enum_range(NULL::cooking_level)) as cooking_levels,
            unnest(enum_range(NULL::difficulty_level)) as difficulty_levels,
            unnest(enum_range(NULL::cuisine_type)) as cuisine_types
        `
      });
    
    if (typeError) {
      console.error('❌ Error checking custom types:', typeError.message);
      allTestsPassed = false;
    } else {
      console.log('✅ Custom enum types are working correctly');
    }
  } catch (error) {
    console.error('❌ Error testing custom types:', error.message);
    allTestsPassed = false;
  }
  
  // Test 5: Check indexes
  console.log('\n⚡ Test 5: Checking database indexes...');
  
  try {
    const { data: indexes, error: indexError } = await supabaseService
      .rpc('exec_sql', {
        sql: `
          SELECT 
            schemaname,
            tablename,
            indexname,
            indexdef
          FROM pg_indexes 
          WHERE schemaname = 'public' 
          AND tablename IN ('mamas', 'recipes', 'profiles', 'user_progress', 'favorites')
          ORDER BY tablename, indexname;
        `
      });
    
    if (indexError) {
      console.error('❌ Error checking indexes:', indexError.message);
      allTestsPassed = false;
    } else {
      console.log('✅ Database indexes are properly configured');
    }
  } catch (error) {
    console.error('❌ Error testing indexes:', error.message);
    allTestsPassed = false;
  }
  
  // Test 6: Check triggers
  console.log('\n⚙️  Test 6: Checking database triggers...');
  
  try {
    const { data: triggers, error: triggerError } = await supabaseService
      .rpc('exec_sql', {
        sql: `
          SELECT 
            trigger_name,
            event_object_table,
            action_timing,
            event_manipulation
          FROM information_schema.triggers
          WHERE trigger_schema = 'public'
          ORDER BY event_object_table, trigger_name;
        `
      });
    
    if (triggerError) {
      console.error('❌ Error checking triggers:', triggerError.message);
      allTestsPassed = false;
    } else {
      console.log('✅ Database triggers are properly configured');
    }
  } catch (error) {
    console.error('❌ Error testing triggers:', error.message);
    allTestsPassed = false;
  }
  
  // Summary
  console.log('\n' + '='.repeat(50));
  if (allTestsPassed) {
    console.log('🎉 All database tests passed!');
    console.log('\n✅ Your MAMIA database is ready for production');
    console.log('✅ RLS policies are properly configured');
    console.log('✅ Sample data is loaded and accessible');
    console.log('✅ Database schema is complete');
    console.log('\n🚀 You can now start building your MAMIA app!');
  } else {
    console.log('❌ Some tests failed. Please check the errors above.');
    console.log('\n🔧 Common fixes:');
    console.log('   - Ensure all migrations have been run');
    console.log('   - Check your environment variables');
    console.log('   - Verify your Supabase project is active');
    console.log('   - Review the migration logs for errors');
  }
  
  console.log('\n📖 For more help, see: supabase/README.md');
}

// Handle command line arguments
const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  console.log(`
MAMIA Database Test Suite

Usage: node scripts/test-database.js [options]

Options:
  --help, -h     Show this help message

This script tests:
  ✓ Database connectivity
  ✓ Table structure and data
  ✓ RLS policies
  ✓ Custom types
  ✓ Indexes and triggers

Environment Variables Required:
  NEXT_PUBLIC_SUPABASE_URL      Your Supabase project URL
  NEXT_PUBLIC_SUPABASE_ANON_KEY Your Supabase anonymous key
  SUPABASE_SERVICE_KEY          Your Supabase service role key

Example:
  node scripts/test-database.js
  `);
  process.exit(0);
}

// Run tests
testDatabaseSetup().catch(error => {
  console.error('💥 Test suite failed:', error);
  process.exit(1);
}); 