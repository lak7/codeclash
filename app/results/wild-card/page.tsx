'use client'

import React, { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Users, Trophy, User, Building2, Star, Zap } from 'lucide-react'

// Wild card entries data
const wildCardTeams = [
  {
    id: 1,
    team_name: "Triage-O-matic",
    leader_name: "Tanmay Verma"
  },
  {
    id: 2,
    team_name: "MetaStrikers",
    leader_name: "Vaibhav Jamloki"
  },
  {
    id: 3,
    team_name: "Code for Justice",
    leader_name: "Ansh Aneja"
  }
]

export default function WildCardResults() {
  const [searchTerm, setSearchTerm] = useState('')

  // Filter teams based on search term
  const filteredTeams = useMemo(() => {
    if (!searchTerm) return wildCardTeams
    
    return wildCardTeams.filter(team => 
      team.team_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.leader_name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-orange-900/20 via-purple-900/20 to-pink-900/20 border-b border-orange-500/20">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.png')] opacity-10"></div>
        <div className="relative container mx-auto px-6 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Zap className="h-12 w-12 text-orange-500 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Wild Card Entries
              </h1>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              These exceptional teams have earned their spot through outstanding performance and innovation.
            </p>
            <div className="flex items-center justify-center mt-6 space-x-6">
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-orange-400" />
                <span className="text-orange-400 font-semibold">Wild Card Teams</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-pink-400" />
                <span className="text-pink-400 font-semibold">Special Entry</span>
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
              className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>


        {/* Teams Grid */}
        {filteredTeams.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-gray-900/30 rounded-lg p-8 max-w-md mx-auto">
              <Search className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No teams found</h3>
              <p className="text-gray-500">
                Try adjusting your search terms
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeams.map((team, index) => (
              <Card key={team.id} className="bg-gray-900/50 border-gray-700 hover:border-orange-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-orange-500/20">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                        {team.team_name}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                          ⚡ Wild Card
                        </Badge>
                        <Badge variant="secondary" className="bg-pink-500/20 text-pink-300 border-pink-500/30">
                          Special Entry
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
                    <Zap className="h-4 w-4 text-orange-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">Status</p>
                      <p className="text-orange-300 font-medium">Wild Card Entry</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Star className="h-4 w-4 text-pink-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">Achievement</p>
                      <p className="text-pink-300 font-medium">Special Recognition</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">
                        Outstanding Performance
                      </p>
                      <div className="flex space-x-1">
                        <Zap className="h-3 w-3 text-orange-400" />
                        <Star className="h-3 w-3 text-pink-400" />
                        <Star className="h-3 w-3 text-purple-400" />
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
        <div className="bg-gradient-to-r from-orange-900/20 via-pink-900/20 to-purple-900/20 rounded-xl p-8 text-center border border-orange-500/20">
          <Zap className="h-16 w-16 text-orange-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Congratulations to All Wild Card Teams! 🎉
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Your exceptional performance and innovation have earned you this special recognition.
          </p>
          <p className="text-gray-400">
            These teams have shown remarkable potential and creativity in their submissions! ⚡
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-orange-400" />
              <span className="text-orange-400">Wild Card Entry</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-pink-400" />
              <span className="text-pink-400">Special Recognition</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-purple-400" />
              <span className="text-purple-400">Outstanding Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
