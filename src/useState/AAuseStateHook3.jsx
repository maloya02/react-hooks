import React, { useState } from 'react';

// const [first, setfirst] = useState(second)

const AAuseStateHook3 = () => {
  const [name, setName] = useState('A.a. Dasalla');

  const buttonClick = () => {
    const input = document.getElementById('nameInput');
    setName(input.value);
    input.value = ''; 
    
  };

  return (
    <div>
      {name}
      <input type="text" id="nameInput" placeholder={"Enter Name Here"}/>
      <button onClick={buttonClick}>Click this</button>
      
    </div>
  );
};

export default AAuseStateHook3;
