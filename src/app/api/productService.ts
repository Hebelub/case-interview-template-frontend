const API_BASE_URL = 'https://localhost:44355/api';

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  categoryId: number;
  category: Category;
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/Products`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}
