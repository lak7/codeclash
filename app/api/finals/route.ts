import { NextResponse } from 'next/server'
import { finalistsData } from '@/lib/finalists-data'

export async function GET() {  
  try {
    // Use the imported data instead of reading from CSV
    const data = finalistsData
    
    // Sort by team name
    data.sort((a, b) => a.team_name.localeCompare(b.team_name))

    return NextResponse.json({
      success: true,
      data: data,
      count: data.length
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 