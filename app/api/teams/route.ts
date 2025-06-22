import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/teams - Get all teams
export async function GET() {
  try {
    const teams = await db.team.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

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
    const { teamName, candidateName, email, phoneNumber } = body;

    if (!teamName || !candidateName || !email) {
      return NextResponse.json(
        { error: 'Team name, candidate name, and email are required' },
        { status: 400 }
      );
    }

    const team = await db.team.create({
      data: {
        teamName,
        candidateName,
        email,
        phoneNumber,
      },
    });

    return NextResponse.json(team, { status: 201 });
  } catch (error) {
    console.error('Error creating team:', error);
    
    // Handle unique constraint violations
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      if (error.message.includes('teamName')) {
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