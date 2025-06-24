'use client'

import React, { useState, useEffect } from 'react'
import { Search, Trophy, Users, Crown, Star, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

interface TeamResult {
  id: number
  team_name: string
  leader_name: string
  created_at: string
}

const PrototypePresentationResults = () => {
  const [results, setResults] = useState<TeamResult[]>([])
  const [filteredResults, setFilteredResults] = useState<TeamResult[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchResults()
  }, [])

  useEffect(() => {
    if (searchTerm) {
      const filtered = results.filter(
        (team) =>
          team.team_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          team.leader_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredResults(filtered)
    } else {
      setFilteredResults(results)
    }
  }, [searchTerm, results])

  const fetchResults = async () => {
    try {
      const response = await fetch('/api/round-2')
      const data = await response.json()
      
      if (data.success) {
        setResults(data.data)
        setFilteredResults(data.data)
      } else {
        setError('Failed to fetch results')
      }
    } catch (err) {
      setError('Error loading results')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const getRankIcon = (index: number) => {
    if (index === 0) return <Crown className="text-yellow-400 w-5 h-5" />
    if (index < 3) return <Star className="text-pink-400 w-5 h-5" />
    if (index < 10) return <Sparkles className="text-purple-400 w-4 h-4" />
    return <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading results...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center bg-gray-900/50 rounded-lg p-8 border border-red-500/30">
          <p className="text-red-400 text-xl">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-cyan-900/20 border-b border-pink-500/20">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.png')] opacity-10"></div>
        
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Trophy className="h-12 w-12 text-pink-500 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Prototype Presentation
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
              🎉 Congratulations to all selected teams for the prototype presentation round! 🎉
            </p>
            {/* <div className="flex items-center justify-center space-x-6">
              <Badge className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border-pink-500/30 text-lg px-6 py-2">
                <Users className="h-5 w-5 mr-2" />
                {filteredResults.length} Elite Teams Selected
              </Badge>
            </div> */}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Search Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by team name or leader name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-pink-500 focus:ring-pink-500 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="text-center mb-8">
          {/* <p className="text-gray-400">
            Showing {filteredResults.length} of {results.length} teams
          </p> */}
        </div>

        {/* Teams Grid */}
        {filteredResults.length === 0 && searchTerm ? (
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
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredResults.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="bg-gray-900/50 border-gray-700 hover:border-pink-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-pink-500/10 h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors leading-tight">
                      {team.team_name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg">
                        <Users className="h-4 w-4 text-pink-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-gray-400">Team Leader</p>
                        <p className="text-white font-medium truncate" title={team.leader_name}>
                          {team.leader_name}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-gray-700/50">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Status</span>
                        <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30 text-xs">
                          Qualified ✓
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Footer Note */}
      <div className="container mx-auto px-6 py-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-purple-900/30 rounded-xl p-6 border border-gray-700/50 max-w-2xl mx-auto">
            <p className="text-gray-300 text-lg">
              🚀 Best of luck for the final presentation round! 🚀
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Show us what you've built and make it count!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrototypePresentationResults
