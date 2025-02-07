import React from "react";

export default function Fourth() {
  const users = [
    { id: 1, name: "Sunny Janjua", age: 24, location: "Faisalabad", role: "Developer" },
    { id: 2, name: "Ali Bhai", age: 26, location: "Lahore", role: "Designer" },
    { id: 3, name: "Farhan Bhai", age: 28, location: "Karachi", role: "Project Manager" },
    { id: 4, name: "Amna", age: 22, location: "Islamabad", role: "Frontend Developer" },
    { id: 5, name: "Ahmed Raza", age: 30, location: "Multan", role: "Backend Developer" },
    { id: 6, name: "Hassan Tariq", age: 27, location: "Rawalpindi", role: "Full-Stack Developer" },
    { id: 7, name: "Usman Javed", age: 23, location: "Sialkot", role: "DevOps Engineer" },
    { id: 8, name: "Zain Ul Abideen", age: 29, location: "Quetta", role: "Database Administrator" },
    { id: 9, name: "Bilal Khan", age: 25, location: "Peshawar", role: "Mobile App Developer" },
    { id: 10, name: "Naveed Akhtar", age: 31, location: "Hyderabad", role: "Cloud Engineer" },
  ];

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-5">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow-lg rounded-lg p-5 border border-gray-200 hover:shadow-xl transition">
            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-600"><span className="font-semibold">Age:</span> {user.age}</p>
            <p className="text-gray-600"><span className="font-semibold">Location:</span> {user.location}</p>
            <p className="text-gray-600"><span className="font-semibold">Role:</span> {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
