const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface Category {
  id: number;
  name: string;
}

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/Categories`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Category[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
}

export async function getCategoryById(id: number): Promise<Category | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/Categories/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Category = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch category with ID ${id}:`, error);
    return null;
  }
}
