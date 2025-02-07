"use client";
// import React, { useState } from 'react';

// export default function Spreadstate() { 
//         const [data, setData] = useState({name: "Code With Sunny Janjua", age: 25, email: "hussnainmulazam@gmail.com"});

//         const onclickHandler = (): void => {
//         console.log("Data Changed");
//         setData({name: "Code With Sunny", age: 26, email: "cwsunnyjanjua@gmail.com"});
//     }

//   return (
//     <div>
//       <h1>My name is {data.name}</h1>
//       <h1>My age is {data.age}</h1>
//       <h1>My email is {data.email}</h1>
//       <button onClick={onclickHandler}>change all values</button>
//     </div>
//   )
// }


import { useState } from "react";

export default function Spreadstate() {
  const [user, setUser] = useState({ name: "Sunny", age: 22 });

  return (
    <div className="text-center p-5">
      <h1 className="text-2xl font-bold">Name: {user.name}</h1>
      <h2 className="text-xl">Age: {user.age}</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setUser({ ...user, age: user.age + 1 })}
      >
        Increase Age
      </button>
    </div>
  );
}

