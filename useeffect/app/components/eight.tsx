"use client";
import React from "react";

export default function NestedMap() {
  const students = [
    {
      id: 1,
      name: "Sunny Janjua",
      scores: [
        { subject: "Algebra", score: 85 },
        { subject: "Geometry", score: 90 },
        { subject: "Calculus", score: 78 },
      ],
    },
    {
      id: 2,
      name: "Ali Bhai",
      scores: [
        { subject: "Algebra", score: 75 },
        { subject: "Geometry", score: 88 },
        { subject: "Calculus", score: 82 },
      ],
    },
    {
      id: 3,
      name: "Farhan Bhai",
      scores: [
        { subject: "Algebra", score: 92 },
        { subject: "Geometry", score: 85 },
        { subject: "Calculus", score: 89 },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-5xl font-bold text-blue-400 mb-8">📊 Students' Math Scores</h1>
      {students.map((student) => (
        <div key={student.id} className="bg-gray-800 p-6 mb-4 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-yellow-400">{student.name}</h2>
          <ul className="mt-2">
            {student.scores.map((subject, index) => (
              <li key={index} className="text-lg text-gray-300">
                {subject.subject}: <span className="text-green-400">{subject.score}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
