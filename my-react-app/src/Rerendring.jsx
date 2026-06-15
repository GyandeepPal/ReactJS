import React, { useEffect, useReducer, useRef } from 'react'
import './App.css'

const Rerendring = () => {

  const reducer = (state, action) => {
    if (action === "Gyan") {
      return state + 1;
    } else if (action === "Gyan Deep") {
      return state - 1;
    }
    return state;
  };

  const [count, dispatch] = useReducer(reducer, 0);

  const btnRef = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    btnRef.current.style.background = "red";
    ref.current.style.background = "yellow";
  }, []);

  return (
    <div id="Main">
      <h1>CHALO</h1>
      <h3>{count}</h3>

      <button
        ref={btnRef}
        className="one"
        onClick={() => dispatch("Gyan")}
      >
        😅
      </button>

      <button
        ref={ref}
        className="two"
        onClick={() => dispatch("Gyan Deep")}
      >
        ❤️
      </button>
    </div>
  );
};

export default Rerendring;