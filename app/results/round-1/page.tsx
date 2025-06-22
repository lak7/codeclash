'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { Round1Data } from '@/lib/supabase'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Users, Trophy, Mail, User } from 'lucide-react'
import { toast } from 'sonner'

export default function Round1Results() {
  const [teams, setTeams] = useState<Round1Data[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  // Fetch data from API
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/round-1')
        const result = await response.json()

        if (!response.ok) {
          console.error('Error fetching teams:', result.error)
          toast.error('Failed to fetch teams data')
          return
        }

        setTeams(result.data || [])
      } catch (error) {
        console.error('Error:', error)
        toast.error('Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchTeams()
  }, [])

  // Filter teams based on search term
  const filteredTeams = useMemo(() => {
    if (!searchTerm) return teams
    
    return teams.filter(team => 
      team.team_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.candidate_name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [teams, searchTerm])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading teams...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-cyan-900/20 border-b border-pink-500/20">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.png')] opacity-10"></div>
        <div className="relative container mx-auto px-6 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Trophy className="h-12 w-12 text-pink-500 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Round 1 Results
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Congratulations to all the teams who made it to Round 1! Here are the qualified participants.
            </p>
            <div className="flex items-center justify-center mt-6 space-x-6">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-cyan-400" />
                {/* <span className="text-cyan-400 font-semibold">{teams.length} Teams Qualified</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by team name or leader name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-pink-500 focus:ring-pink-500"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-400">
            {/* Showing {filteredTeams.length} of {teams.length} teams */}
          </p>
        </div>

        {/* Teams Grid */}
        {filteredTeams.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-gray-900/30 rounded-lg p-8 max-w-md mx-auto">
              <Search className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No teams found</h3>
              <p className="text-gray-500">
                {searchTerm ? 'Try adjusting your search terms' : 'No teams available'}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeams.map((team, index) => (
              <Card key={team.id || index} className="bg-gray-900/50 border-gray-700 hover:border-pink-500/50 transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                        {team.team_name}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-2 bg-pink-500/20 text-pink-300 border-pink-500/30">
                        Qualified
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-gray-600">
                      {/* #{index + 1} */}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <User className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">Team Leader</p>
                      <p className="text-white font-medium">{team.candidate_name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-purple-400 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-medium truncate" title={team.candidate_email}>
                        {team.candidate_email}
                      </p>
                    </div>
                  </div>

                  {team.candidate_mobile && (
                    <div className="flex items-center space-x-3">
                      <div className="h-4 w-4 text-green-400 flex-shrink-0">📱</div>
                      <div>
                        <p className="text-sm text-gray-400">Mobile</p>
                        <p className="text-white font-medium">{team.candidate_mobile}</p>
                      </div>
                    </div>
                  )}

                  {team.created_at && (
                    <div className="pt-2 border-t border-gray-700">
                      <p className="text-xs text-gray-500">
                        Registered: {new Date(team.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Footer Note */}
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Best of luck to all teams in the upcoming rounds! 🚀
          </p>
        </div>
      </div>
    </div>
  )
}
