"use client"

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Booking, createBooking } from '@/app/api/bookingService';
import { toast } from '@/components/ui/use-toast';


function BookRoomPage() {

  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const newBooking: Partial<Booking> = {
        category,
        startDate,
        endDate,
      };

      const bookingResponse = await createBooking(newBooking);
      if (!bookingResponse) {
        throw new Error('Booking failed');
      }

      toast({
        title: "Booking Successful",
        description: "Your room has been booked successfully.",
      });
    } catch (err) {
      const error = err as Error;
      toast({
        title: "Booking Failed",
        description: error.message,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book a Room</h1>
      <form onSubmit={handleBookingSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <Select value={category} onValueChange={(value) => setCategory(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                <SelectItem value="single">Single Room</SelectItem>
                <SelectItem value="double">Double Room</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">End Date</label>
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
            It will automatically find a room for you based on the category and time period you selected.
        </div>

        
        <Button type="submit">Book Room</Button>
      </form>
    </div>
  );
}

export default BookRoomPage;
