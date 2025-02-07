"use client"
import { useEffect, useState } from "react";

export default function Example5() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  }, []); 

  return <h1>Window Width: {width}px</h1>;
}
