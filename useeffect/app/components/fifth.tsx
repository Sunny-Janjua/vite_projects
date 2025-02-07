"use client";
import React, { useState, useEffect } from "react";

export default function Fifth() {
  const [count, setCount] = useState(0);
  const [autoIncrement, setAutoIncrement] = useState(false);
  const [autoDecrement, setAutoDecrement] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (autoIncrement) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else if (autoDecrement) {
      interval = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoIncrement, autoDecrement]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">🔥 Our Counter 🔥</h1>
      
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => {
            setAutoIncrement(true);
            setAutoDecrement(false);
          }}
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Start Auto Increment ⏫
        </button>

        <button
          onClick={() => {
            setAutoIncrement(false);
            setAutoDecrement(true);
          }}
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Start Auto Decrement ⏬
        </button>
      </div>

      <h1 className="text-5xl font-bold mb-4">Value: {count}</h1>

      <button
        onClick={() => {
          setAutoIncrement(false);
          setAutoDecrement(false);
        }}
        className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition"
      >
        Stop Auto Update ⏹️
      </button>
    </div>
  );
}
