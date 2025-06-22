// API utility functions for teams
import type { Team } from '@/lib/supabase';

// Teams API functions
export const teamsApi = {
  // Get all teams
  getAll: async (): Promise<Team[]> => {
    const response = await fetch('/api/teams');
    if (!response.ok) {
      throw new Error('Failed to fetch teams');
    }
    return response.json();
  },

  // Create a new team
  create: async (data: {
    team_name: string;
    candidate_name: string;
    email: string;
    phone_number?: string;
  }): Promise<Team> => {
    const response = await fetch('/api/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create team');
    }
    
    return response.json();
  },
}; 