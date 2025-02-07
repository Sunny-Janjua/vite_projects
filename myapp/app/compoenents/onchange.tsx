"use client";
import React, { useState } from 'react'

export default function Onchange() {
    const [value, setValue] = useState('')
  return (
    <div>
        <h1>Our value : {value}</h1>
      <input
       value={value}
       type="text"
       placeholder='Enter your value'
       onChange={(e) => setValue(e.target.value)}
        />
    </div>
  )
}
