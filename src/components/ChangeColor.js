import React, { useState } from 'react';


function ChangeColor() {

  const [color, setColor] = useState("")
  return (
    <div>
      <input 
        type="text" 
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button> Dark Mode</button>
    </div>
  );
}

export default ChangeColor;
