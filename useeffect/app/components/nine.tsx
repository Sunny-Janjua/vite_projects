import React from "react";

type Mark = {
  subject: string;
  marks: number;
};

type Student = {
  name: string;
  rollNo: string;
  grade: string;
  marks: Mark[];
};

export default function Nine() {
  const data: Student[] = [
    {
      name: "Sunny Janjua",
      rollNo: "333433",
      grade: "A",
      marks: [
        { subject: "Maths", marks: 80 },
        { subject: "Science", marks: 90 },
      ],
    },
    {
      name: "Ali Bhai",
      rollNo: "334455",
      grade: "B",
      marks: [
        { subject: "Maths", marks: 75 },
        { subject: "Science", marks: 85 },
      ],
    },
    {
      name: "Farhan Bhai",
      rollNo: "335566",
      grade: "A+",
      marks: [
        { subject: "Maths", marks: 95 },
        { subject: "Science", marks: 98 },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-5xl font-bold text-blue-400 mb-8">📚 Student Marks</h1>
      
      {data.map((student, studentIndex) => (
        <div key={studentIndex} className="bg-gray-800 p-6 mb-4 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-yellow-400">{student.name}</h2>
          <h3 className="text-lg text-gray-300">Roll No: {student.rollNo}</h3>
          <h3 className="text-lg text-green-400">Grade: {student.grade}</h3>

          <ul className="mt-3">
            {student.marks.map((mark, markIndex) => (
              <li key={markIndex} className="text-lg text-gray-300">
                {mark.subject}: <span className="text-green-400">{mark.marks}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
