import React from "react";

export default function Greeting(props: { name: string; age: number }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
      <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-2">Hello, {props.name}! 👋</h1>
        <h2 className="text-lg font-medium">You are {props.age} years old.</h2>
      </div>
    </div>
  );
}
