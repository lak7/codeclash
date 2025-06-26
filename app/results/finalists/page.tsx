'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Users, Trophy, User, Building2, Star } from 'lucide-react'
import { toast } from 'sonner'

interface FinalistData {
  id: number
  team_name: string
  leader_name: string
  created_at: string
}

export default function FinalistsResults() {
  const [teams, setTeams] = useState<FinalistData[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  // Fetch data from API
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/finals')
        const result = await response.json()

        if (!response.ok) {
          console.error('Error fetching teams:', result.error)
          toast.error('Failed to fetch finalists data')
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
      team.leader_name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [teams, searchTerm])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading finalists...</p>
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
              <Building2 className="h-12 w-12 text-pink-500 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                The Finalists
              </h1>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              These exceptional teams will showcase their innovations and compete for the ultimate prize.
            </p>
            <div className="flex items-center justify-center mt-6 space-x-6">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold"> Finalist Teams</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="h-5 w-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Google Office Venue</span>
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
            Showing {filteredTeams.length} of {teams.length} finalist teams
          </p>
        </div>

        {/* Teams Grid */}
        {filteredTeams.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-gray-900/30 rounded-lg p-8 max-w-md mx-auto">
              <Search className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No teams found</h3>
              <p className="text-gray-500">
                {searchTerm ? 'Try adjusting your search terms' : 'No finalist teams available'}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeams.map((team, index) => (
              <Card key={team.id || index} className="bg-gray-900/50 border-gray-700 hover:border-pink-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-pink-500/20">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                        {team.team_name}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary" className="bg-pink-500/20 text-pink-300 border-pink-500/30">
                          🏆 Finalist
                        </Badge>
                        <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                          Google Office
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <User className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">Team Leader</p>
                      <p className="text-white font-medium">{team.leader_name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Trophy className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">Status</p>
                      <p className="text-yellow-300 font-medium">Ready for Finals</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Building2 className="h-4 w-4 text-purple-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">Venue</p>
                      <p className="text-purple-300 font-medium">Google Office</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">
                        Qualified Team
                      </p>
                      <div className="flex space-x-1">
                        <Star className="h-3 w-3 text-yellow-400" />
                        <Star className="h-3 w-3 text-yellow-400" />
                        <Star className="h-3 w-3 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Congratulations Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-pink-900/20 via-purple-900/20 to-cyan-900/20 rounded-xl p-8 text-center border border-pink-500/20">
          <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Congratulations to All Finalists! 🎉
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            You have made it to the prestigious Google Office for the final round. 
          </p>
          <p className="text-gray-400">
            Best of luck to all teams in the grand finale! May the best team win! 🚀
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-5 w-5 text-cyan-400" />
              <span className="text-cyan-400">Google Office Venue</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400">Elite Competition</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-pink-400" />
              <span className="text-pink-400">Grand Finale</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
