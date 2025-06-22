import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types for the round_1 table
export interface Round1Data {
  id?: number
  team_name: string
  candidate_name: string
  candidate_email: string
  candidate_mobile?: string
  created_at?: string
}

// Types for the teams table
export interface Team {
  id: string
  team_name: string
  candidate_name: string
  email: string
  phone_number?: string
  created_at: string
  updated_at: string
}

// Database operations for teams
export const teamsService = {
  // Get all teams
  async getAll(): Promise<Team[]> {
    const { data, error } = await supabase
      .from('teams')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      throw new Error(`Failed to fetch teams: ${error.message}`)
    }
    
    return data || []
  },

  // Create a new team
  async create(teamData: {
    team_name: string
    candidate_name: string
    email: string
    phone_number?: string
  }): Promise<Team> {
    const { data, error } = await supabase
      .from('teams')
      .insert([teamData])
      .select()
      .single()
    
    if (error) {
      throw new Error(`Failed to create team: ${error.message}`)
    }
    
    return data
  },

  // Get team by id
  async getById(id: string): Promise<Team | null> {
    const { data, error } = await supabase
      .from('teams')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) {
      if (error.code === 'PGRST116') {
        return null // No rows found
      }
      throw new Error(`Failed to fetch team: ${error.message}`)
    }
    
    return data
  }
} 