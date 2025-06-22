#!/usr/bin/env node

/**
 * Database setup script for CodeClash
 * This script helps set up the database for development
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function runCommand(command, description) {
  console.log(`\n🔄 ${description}...`);
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ ${description} completed successfully`);
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    process.exit(1);
  }
}

function checkEnvFile() {
  const envPath = path.join(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) {
    console.log('\n⚠️  .env file not found. Creating a template...');
    
    const envTemplate = `# Database
# Update this with your actual database credentials

# For PostgreSQL (recommended for production)
DATABASE_URL="postgresql://username:password@localhost:5432/codeclash?schema=public"

# For SQLite (good for development)
# DATABASE_URL="file:./dev.db"
`;
    
    try {
      fs.writeFileSync(envPath, envTemplate);
      console.log('✅ Created .env template file');
      console.log('🔧 Please update the DATABASE_URL in .env with your database credentials');
      return false;
    } catch (error) {
      console.error('❌ Failed to create .env file:', error.message);
      return false;
    }
  }
  return true;
}

function main() {
  console.log('🚀 Setting up CodeClash database...\n');

  // Check if .env file exists
  if (!checkEnvFile()) {
    console.log('\n⏸️  Please update your .env file and run this script again.');
    return;
  }

  // Generate Prisma client
  runCommand('npx prisma generate', 'Generating Prisma client');

  // Check database connection and create migration
  console.log('\n📋 Next steps:');
  console.log('1. Ensure your database is running');
  console.log('2. Update DATABASE_URL in .env file');
  console.log('3. Run: npx prisma migrate dev --name init');
  console.log('4. Optional: Run: npx prisma studio (to view your database)');
  
  console.log('\n✨ Database setup preparation complete!');
}

if (require.main === module) {
  main();
} 