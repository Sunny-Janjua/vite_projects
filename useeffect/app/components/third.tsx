"use client"
import { useEffect, useState } from "react";

interface User{
    id: number;
    title: string;
  };

export default function Example4() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setData(result.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); // Runs only once

  return (
    <div>
      <h1>Product List</h1>
      {loading ? <p>Loading...</p> : data.map(item => <p key={item.id}>{item.title}</p>)}
    </div>
  );
}
