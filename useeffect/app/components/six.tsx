"use client";
import React, { useState } from "react";

export default function Six() {
  const [count, setCount] = useState(0);

  function startIncrement() {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold text-red-400 mt-8">🚀 Auto Incremental 🚀</h1>
      <h1 className="text-4xl font-semibold mt-4">Value: {count}</h1>

      <button
        onClick={startIncrement}
        className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
      >
        Start Increment ⏫
      </button>
    </div>
  );
}
