import React, { useEffect } from 'react';

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);
    
  return <div>{returnComment("AA-Dasalla")}</div>;
};

export default Child;
