import React from "react";

function add(a, b) {
  return a + b;
}

function Welcome() {
  return <h1>Welcome to My First React Component</h1>;
}

function Info() {
  return (
    <div>
      <h3>What is a Component?</h3>
      <p>
        A component is a reusable piece of code that returns a React element.
      </p>
      <h3>Differnece between function and component</h3>
      <p> A function is a block of code that performs a specific task, while a component is a reusable piece of code that returns a React element. </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Your First React Component</h1>

      <Welcome />

      <Info />

      <h3>How to use components?</h3>
      <p>Use components like HTML tags.</p>

      <h3>Addition Example</h3>
      <p>10 + 20 = {add(10, 20)}</p>
    </div>
  );
}

export default App;