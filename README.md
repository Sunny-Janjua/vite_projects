# React.js - A Complete Guide

## Introduction
React.js is an open-source JavaScript library developed by Facebook for building user interfaces, especially for single-page applications. It enables developers to create reusable UI components with a virtual DOM for efficient rendering.

## Table of Contents
1. Installation
2. JSX
3. Components
4. Props
5. State
6. Event Handling
7. Lifecycle Methods
8. Hooks
9. Conditional Rendering
10. Lists and Keys
11. Forms
12. Routing
13. State Management (Context API, Redux)
14. API Calls
15. Performance Optimization
16. Deployment

---

## 1. Installation
To install React, you need **Node.js** and **npm** (Node Package Manager). Install React using Create React App:
```sh
npx create-react-app my-app
cd my-app
npm start
```
This will start a development server at `http://localhost:3000/`.

---

## 2. JSX (JavaScript XML)
JSX allows writing HTML-like syntax inside JavaScript. Example:
```jsx
const element = <h1>Hello, React!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

---

## 3. Components
React apps are built using **components** (functional or class-based).

### Functional Component:
```jsx
function Greeting() {
  return <h1>Hello, World!</h1>;
}
export default Greeting;
```

### Class Component:
```jsx
import React, { Component } from 'react';
class Greeting extends Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}
export default Greeting;
```

---

## 4. Props
Props (properties) are used to pass data to components.
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
<Welcome name="Sunny" />
```

---

## 5. State
State allows components to manage internal data.
```jsx
import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Counter;
```

---

## 6. Event Handling
Handling events in React is similar to handling events in DOM.
```jsx
function ClickButton() {
  function handleClick() {
    alert("Button clicked!");
  }
  return <button onClick={handleClick}>Click Me</button>;
}
```

---

## 7. Lifecycle Methods (Class Components)
1. `componentDidMount()` - Runs after the component is mounted.
2. `componentDidUpdate()` - Runs after the component updates.
3. `componentWillUnmount()` - Runs before the component is removed.

---

## 8. Hooks
Hooks allow functional components to use state and lifecycle methods.
- `useState` - Manages state
- `useEffect` - Handles side effects
- `useContext` - Manages global state
- `useRef` - References DOM elements
- `useReducer` - Alternative to useState for complex logic

Example:
```jsx
import { useState } from 'react';
function Example() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

---

## 9. Conditional Rendering
```jsx
function Greeting(props) {
  return props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>;
}
```

---

## 10. Lists and Keys
Rendering lists dynamically:
```jsx
const items = ['Apple', 'Banana', 'Cherry'];
return <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>;
```

---

## 11. Forms
Forms in React require controlled components.
```jsx
function Form() {
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Submitted: ${input}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 12. Routing (React Router)
Install React Router:
```sh
npm install react-router-dom
```
Example:
```jsx
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}
```

---

## 13. State Management
### Context API
```jsx
const MyContext = React.createContext();
<MyContext.Provider value={value}>
  <MyComponent />
</MyContext.Provider>
```

### Redux
Install Redux:
```sh
npm install redux react-redux
```

---

## 14. API Calls (Fetching Data)
Using `fetch`:
```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPosts(data));
}, []);
```

---

## 15. Performance Optimization
- Use **React.memo** to prevent unnecessary re-renders.
- Use **useCallback** for memoized functions.
- Use **useMemo** to optimize expensive calculations.

---

## 16. Deployment
Deploy to **Vercel**, **Netlify**, or **GitHub Pages**.
```sh
npm run build
```
This generates an optimized production build in the `build/` folder.

---

## Conclusion
This README provides an overview of React.js and its core concepts. Keep practicing and exploring React to build powerful web applications! 🚀
