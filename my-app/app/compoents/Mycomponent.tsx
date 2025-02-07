"use client";
import React, { Component } from "react";

function Heading() {
    return <h1 className="text-5xl text-red-600">Hello, Sunny! 😊</h1>;
    
}

class MyComponent extends Component {
  render() {
    return(
        <>
             <h1 className="text-5xl text-red-600">Hello, Sunny! 😊</h1>
             <Heading/>
        </>
    )

  }
}

export default MyComponent;
