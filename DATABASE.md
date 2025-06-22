# CodeClash Database Schema (Supabase)

This document outlines the database schema for the CodeClash application using Supabase.

## Tables

### teams
Table for storing team registration data.

```sql
CREATE TABLE teams (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  team_name TEXT UNIQUE NOT NULL,
  candidate_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone_number TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add indexes for performance
CREATE INDEX idx_teams_team_name ON teams(team_name);
CREATE INDEX idx_teams_email ON teams(email);
CREATE INDEX idx_teams_created_at ON teams(created_at);

-- Add RLS (Row Level Security) if needed
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;

-- Create a policy for public read access (adjust as needed)
CREATE POLICY "Teams are publicly readable" ON teams
  FOR SELECT USING (true);

-- Create a policy for public insert access (adjust as needed)
CREATE POLICY "Anyone can insert teams" ON teams
  FOR INSERT WITH CHECK (true);
```

### round_1 (if using Supabase instead of CSV)
Alternative table for storing Round 1 results data (currently using CSV file).

```sql
CREATE TABLE round_1 (
  id SERIAL PRIMARY KEY,
  team_name TEXT NOT NULL,
  candidate_name TEXT NOT NULL,
  candidate_email TEXT NOT NULL,
  candidate_mobile TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add indexes
CREATE INDEX idx_round_1_team_name ON round_1(team_name);
CREATE INDEX idx_round_1_candidate_name ON round_1(candidate_name);
```

## Environment Variables

Make sure to set these environment variables in your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Usage

The application uses Supabase client for all database operations. The main operations are:

1. **Creating a team**: `teamsService.create(teamData)`
2. **Getting all teams**: `teamsService.getAll()`
3. **Getting team by ID**: `teamsService.getById(id)`

## Migration from Prisma

If you're migrating from Prisma:

1. Export your existing data from the Prisma database
2. Create the Supabase tables using the SQL above
3. Import your data into Supabase
4. Update your environment variables
5. Test the application

## Notes

- The Round 1 results are currently read from a CSV file (`public/results/shortlisted_team_leaders.csv`)
- If you want to use Supabase for Round 1 data as well, create the `round_1` table and update the API route
- All timestamps are stored in UTC
- UUIDs are used for primary keys in the teams table for better security and scalability 