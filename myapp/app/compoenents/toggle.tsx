import React from "react";

export default function Toggle() {
  return (
    <div>
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle">Toggle</label>
      <div className="h-40 w-40 rounded-xl bg-green-600"></div>
      <h1>Our toggle function</h1>
    </div>
  );
}
