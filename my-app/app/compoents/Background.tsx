"use client";
import React, { useState } from "react";

export default function Background() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="h-screen flex flex-col justify-center items-center transition-all duration-500"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-center text-5xl font-bold text-white drop-shadow-lg mb-8">
        Change Background
      </h1>

      <div className="flex gap-4">
        <button
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
          onClick={() => setColor("green")}
        >
          Green
        </button>

        <button
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition"
          onClick={() => setColor("red")}
        >
          Red
        </button>

        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
      </div>
    </div>
  );
}
