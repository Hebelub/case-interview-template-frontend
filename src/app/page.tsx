"use client"

import { useEffect, useState } from 'react';
// import { getProducts, Product } from '@/app/api/productService';

export default function Home() {
  // const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      // const data = await getProducts();
      // setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>???</h1>
      {/* <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
        
            <ul>
              <li>{product.description}</li>
              <li>{product.category.name}</li>
            </ul>

          </li>
        ))}
      </ul> */}
    </div>
  );
}
