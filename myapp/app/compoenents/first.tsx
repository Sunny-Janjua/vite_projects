import React from "react";
export default function First(props: { heading: string; para: string }) {
  const { heading, para } = props;
  return (
    <div>
      <h1>{heading}</h1>
      <p>{para}</p>
    </div>
  );
}
