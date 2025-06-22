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
    teamName: '',
    candidateName: '',
    email: '',
    phoneNumber: '',
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
        teamName: '',
        candidateName: '',
        email: '',
        phoneNumber: '',
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
            <Label htmlFor="teamName">Team Name</Label>
            <Input
              id="teamName"
              name="teamName"
              type="text"
              value={formData.teamName}
              onChange={handleInputChange}
              required
              placeholder="Enter team name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="candidateName">Candidate Name (Team Leader)</Label>
            <Input
              id="candidateName"
              name="candidateName"
              type="text"
              value={formData.candidateName}
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
            <Label htmlFor="phoneNumber">Phone Number (Optional)</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
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