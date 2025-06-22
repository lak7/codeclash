'use client'

import React, { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'

export default function TestSupabase() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const testConnection = async () => {
    setLoading(true)
    try {
      // Test direct CSV reading (simulating what API does)
      const response = await fetch('/api/round-1')
      const result = await response.json()

      if (!response.ok) {
        toast.error('CSV data loading failed: ' + result.error)
        setResult({ error: result.error })
      } else {
        toast.success('CSV data loaded successfully!')
        setResult({ data: result.data?.slice(0, 5), count: result.count || 0 })
      }
    } catch (error: any) {
      toast.error('Connection error: ' + error.message)
      setResult({ error: error.message })
    } finally {
      setLoading(false)
    }
  }

  const testAPI = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/round-1')
      const result = await response.json()
      
      if (response.ok) {
        toast.success('API endpoint working!')
        setResult(result)
      } else {
        toast.error('API error: ' + result.error)
        setResult(result)
      }
    } catch (error: any) {
      toast.error('API connection error: ' + error.message)
      setResult({ error: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Data Connection Test</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">CSV Data Loading</CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={testConnection} 
                disabled={loading}
                className="w-full"
              >
                {loading ? 'Testing...' : 'Test CSV Data Loading'}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">API Route Test</CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={testAPI} 
                disabled={loading}
                className="w-full"
              >
                {loading ? 'Testing...' : 'Test API Route'}
              </Button>
            </CardContent>
          </Card>
        </div>

        {result && (
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Result</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-800 p-4 rounded text-sm overflow-auto">
                {JSON.stringify(result, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}

        <div className="mt-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
          <h3 className="text-blue-400 font-semibold mb-2">Data Source Information:</h3>
          <p className="text-gray-300 text-sm">
            The application now reads Round 1 results from a CSV file located at:
          </p>
          <ul className="text-gray-400 text-sm mt-2 space-y-1">
            <li>• public/results/shortlisted_team_leaders.csv</li>
            <li>• Data includes: Team Name, Candidate Name, Email, Mobile</li>
            <li>• {/* Add team count info */} Teams are loaded via the /api/round-1 endpoint</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 