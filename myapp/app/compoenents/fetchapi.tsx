"use client";
import { useEffect, useState } from "react";

interface User {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
}

export default function Fetchapi() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setData(result.products);
    } catch (err) {
        console.log("Error")
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-5">Fetch API Data</h1>

      {loading && <p className="text-center text-gray-600 text-lg">Loading data...</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((value) => (
          <div key={value.id} className="bg-white shadow-lg rounded-lg p-5 border border-gray-200 hover:shadow-xl transition">
            <h2 className="text-xl font-bold text-gray-800">{value.title}</h2>
            <p className="text-gray-600"><span className="font-semibold">Category:</span> {value.category}</p>
            <p className="text-gray-600"><span className="font-semibold">Price:</span> ${value.price}</p>
            <p className="text-gray-600"><span className="font-semibold">Description:</span> {value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
