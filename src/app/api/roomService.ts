import { Category } from "@/app/api/categoryService";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export interface Room {
  id: number;
  roomNumber: number;
  categoryId: number;
  category: Category;
  status: string; // Available, Occupied, Reserved, OutOfService
}

export async function getRooms(): Promise<Room[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/Rooms`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Room[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch rooms:', error);
    return [];
  }
}

export async function getRoomById(id: number): Promise<Room | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/Rooms/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Room = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch room with ID ${id}:`, error);
    return null;
  }
}
