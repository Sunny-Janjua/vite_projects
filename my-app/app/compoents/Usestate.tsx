"use client";
import { useState } from "react";

export default function Usestate() {

    const [value , setValue] =useState(1)

  const onclickHandlerIncrement = () => {
    console.log("Increment Button Clicked");
    setValue(value + 1);
  };

    const onclickHandlerDecrement = () => {
        console.log("Decrement Button Clicked");
        setValue(value - 1);
    };

  return (
    <>
      <h1 className="text-center text-red-500 text-2xl font-bold my-4">
        Counter Using UseState ❤️
      </h1>

      <div className="flex flex-col items-center gap-4">
        <button
          onClick={onclickHandlerIncrement}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Increment Button
        </button>

        <h1 className="text-xl font-semibold text-gray-700">
          Our value: {value}
        </h1>

        <button
          onClick={onclickHandlerDecrement}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Decrement Button
        </button>
      </div>
    </>
  );
}
