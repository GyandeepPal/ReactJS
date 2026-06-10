import React, { useState } from 'react'


 

const Onchange = () => {
  const [dark, setdark] = useState(false);

  return (
    <div id="main"
    
      style={{
        backgroundColor: dark ? "red" : "blue",
        color: dark ? "green" : "yellow",
        minHeight: "100vh",
        mianWdth:"70vh"
        
      }}
     
     >
      <p>Hi! I am Gyan Deep</p>
      <p>Hi! I am Rahul</p>
      <p>Hi! I am Gyan Deep Pal</p>

      <button onClick={() => setdark(!dark)}>
        {dark ? " Light Mode" : " Dark Mode"}
      </button>
    </div>
  );
};

export default Onchange;

