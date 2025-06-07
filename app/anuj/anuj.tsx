import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="container">
      <button
        className={clicked ? 'grow' : ''}
        onClick={() => setClicked(!clicked)}
      >
        Click Me
      </button>
    </div>
  );
}
