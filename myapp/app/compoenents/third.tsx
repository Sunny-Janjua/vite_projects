import React from 'react';

export default function Third(props: { onclickHandler: () => string }) {
  return (
    <div>
      <h1>{props.onclickHandler()}</h1>
    </div>
  );
}
