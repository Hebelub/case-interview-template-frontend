import { Room } from '@/app/api/roomService';
import { User } from '@/app/api/userService';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface Booking {
  id: number;
  roomId: number;
  room: Room;
  userId: number;
  user: User;
  startDate: string;
  category: string;
  endDate: string;
  status: string; // Pending, Confirmed, Cancelled, Completed, CheckedIn, CheckedOut
}

export async function getBookings(): Promise<Booking[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/Bookings`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Booking[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch bookings:', error);
    return [];
  }
}

export async function getBookingById(id: number): Promise<Booking | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/Bookings/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Booking = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch booking with ID ${id}:`, error);
    return null;
  }
}

export async function createBooking(booking: Partial<Booking>): Promise<Booking | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/Bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data: Booking = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to create booking:', error);
      return null;
    }
  }
