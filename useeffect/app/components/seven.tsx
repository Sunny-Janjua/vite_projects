import React from 'react'

export default function Seven() {
    const data=["sunny janjua","ali bhai","ali","code with sunny"]
  return (
    <div>
      {
        data.map((item, index) => {
          return <h1 key={index}>{item}</h1>
        })
      }
    </div>
  )
}
