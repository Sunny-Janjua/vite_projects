"use client";
import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState(["Learn React", "Practice JavaScript"]);
  const onclickHandler = () => {
    console.log("Data Changed");
    setTasks([...tasks, "Build a React App"]);
  }

  return (
    <div className="text-center p-5">
      <h1 className="text-2xl font-bold">Tasks:</h1>
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded mt-3"
        onClick={() => setTasks([...tasks, "Build a React App"])}
      >
        Add Task
      </button>
    </div>
  );
}
