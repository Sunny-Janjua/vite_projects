"use client"
import { useEffect } from "react";

export default function Example2() {
  useEffect(() => {
    console.log("Component mounted!");
  }, []); // Empty dependency array (runs only on mount)

  return <h1>Check the console!</h1>;
}
