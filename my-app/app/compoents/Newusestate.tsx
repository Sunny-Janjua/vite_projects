"use client";
import React, { useState } from "react";

export default function Newusestate() {
  const [data, setData] = useState("Code With Sunny Janjua");

  const onclickHandler = () => {
    setData("Code With Sunny");
    console.log("Data Changed");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{data}</h1>

      <button
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        onClick={onclickHandler}
      >
        Change Data
      </button>
    </div>
  );
}
