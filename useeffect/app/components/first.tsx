"use client"
import { useEffect, useState } from "react";

export default function First() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered!");
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
