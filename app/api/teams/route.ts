import { NextRequest, NextResponse } from 'next/server';
import { teamsService } from '@/lib/supabase';

// GET /api/teams - Get all teams
export async function GET() {
  try {
    const teams = await teamsService.getAll();
    return NextResponse.json(teams);
  } catch (error) {
    console.error('Error fetching teams:', error);
    return NextResponse.json(
      { error: 'Failed to fetch teams' },
      { status: 500 }
    );
  }
}

// POST /api/teams - Create a new team
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { team_name, candidate_name, email, phone_number } = body;

    if (!team_name || !candidate_name || !email) {
      return NextResponse.json(
        { error: 'Team name, candidate name, and email are required' },
        { status: 400 }
      );
    }

    const team = await teamsService.create({
      team_name,
      candidate_name,
      email,
      phone_number,
    });

    return NextResponse.json(team, { status: 201 });
  } catch (error) {
    console.error('Error creating team:', error);
    
    // Handle unique constraint violations
    if (error instanceof Error && error.message.includes('duplicate key')) {
      if (error.message.includes('team_name')) {
        return NextResponse.json(
          { error: 'Team name already exists' },
          { status: 409 }
        );
      }
      if (error.message.includes('email')) {
        return NextResponse.json(
          { error: 'Email already exists' },
          { status: 409 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to create team' },
      { status: 500 }
    );
  }
} 