import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const redirectToVercel = () => {
    window.open("https://vercel.com", "_blank");
  };

  return (
    <>
      <h1>Vercel Clone - College Software Group Project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click me! Count: {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to see hot module replacement (HMR) in action.
        </p>
        <button onClick={redirectToVercel} className="vercel-button">
          Learn more about Vercel
        </button>
      </div>
    </>
  );
}

export default App;
