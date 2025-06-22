"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { teamsApi } from '@/lib/api';
import { toast } from 'sonner';

export function TeamForm() {
  const [formData, setFormData] = useState({
    team_name: '',
    candidate_name: '',
    email: '',
    phone_number: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await teamsApi.create(formData);
      toast.success('Team created successfully!');
      
      // Reset form
      setFormData({
        team_name: '',
        candidate_name: '',
        email: '',
        phone_number: '',
      });
    } catch (error) {
      console.error('Failed to create team:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to create team');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Register Team</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="team_name">Team Name</Label>
            <Input
              id="team_name"
              name="team_name"
              type="text"
              value={formData.team_name}
              onChange={handleInputChange}
              required
              placeholder="Enter team name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="candidate_name">Candidate Name (Team Leader)</Label>
            <Input
              id="candidate_name"
              name="candidate_name"
              type="text"
              value={formData.candidate_name}
              onChange={handleInputChange}
              required
              placeholder="Enter candidate name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter email address"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone_number">Phone Number (Optional)</Label>
            <Input
              id="phone_number"
              name="phone_number"
              type="tel"
              value={formData.phone_number}
              onChange={handleInputChange}
              placeholder="Enter phone number"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating...' : 'Create Team'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 