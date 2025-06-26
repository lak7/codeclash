import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {  
  try {
    // Read the CSV file from the public directory
    const csvPath = path.join(process.cwd(), 'public', 'results', 'finalists.csv')
    
    if (!fs.existsSync(csvPath)) {
      return NextResponse.json(
        { error: 'CSV file not found' },
        { status: 404 }
      )
    }

    const csvContent = fs.readFileSync(csvPath, 'utf-8')
    const lines = csvContent.split('\n').filter(line => line.trim())
    
    // Skip the header row and parse the CSV data
    const data = lines.slice(1).map((line, index) => {
      // Handle CSV parsing more carefully for quoted fields
      const columns = []
      let current = ''
      let inQuotes = false
      
      for (let i = 0; i < line.length; i++) {
        const char = line[i]
        if (char === '"') {
          inQuotes = !inQuotes
        } else if (char === ',' && !inQuotes) {
          columns.push(current.trim())
          current = ''
        } else {
          current += char
        }
      }
      columns.push(current.trim()) // Add the last column
      
      // Clean up the data
      const cleanColumn = (col: string) => col.replace(/^"|"$/g, '').trim()
      
      if (columns.length >= 2) {
        return {
          id: index + 1,
          team_name: cleanColumn(columns[0]) || '',
          leader_name: cleanColumn(columns[1]) || '',
          created_at: new Date().toISOString() // Default timestamp
        }
      }
      return null
    }).filter((item): item is NonNullable<typeof item> => item !== null) // Remove any null entries with type guard

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