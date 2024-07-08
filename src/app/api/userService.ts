const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/Users`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: User[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return [];
  }
}

export async function getUserById(id: number): Promise<User | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/Users/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: User = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch user with ID ${id}:`, error);
    return null;
  }
}
