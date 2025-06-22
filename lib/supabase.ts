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