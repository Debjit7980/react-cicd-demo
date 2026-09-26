import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="card">
        <h3>React CI/CD Demo</h3>

        <p className="description">
          This application is being built to learn
          Continuous Integration and Continuous Deployment.
        </p>

        <div className="counter">
          <h2>{count}</h2>

          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>
        </div>

        <div className="status">
          🚀 CI/CD Pipeline Project
        </div>
      </div>
    </div>
  );
}

export default App;