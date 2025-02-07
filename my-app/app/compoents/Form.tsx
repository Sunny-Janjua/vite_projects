"use client";
import { useState } from "react";

export default function Form() {
  const [inputValue, setInputValue] = useState("");

  const onchangeHandler = (e:any) => {
    setInputValue(e.target.value);
  }

  return (
    // <div className="text-center p-5">
    //   <h1 className="text-2xl font-bold">Your Input: {inputValue}</h1>
    //   <input
    //     type="text"
    //     className="border p-2"
    //     value={inputValue}
    //     onChange={(e) => setInputValue(e.target.value)}
    //   />
    // </div>
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Your name is: {inputValue}
      </h1>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={inputValue}
        onChange={onchangeHandler}
        className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    </>
  );
}
