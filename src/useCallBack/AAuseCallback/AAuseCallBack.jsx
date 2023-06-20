import React, { useCallback, useState } from 'react';
import Child from './Child';

const AAuseCallBack = () => {
  const [toggle, setToggle] = useState(false);

  const returnComment = useCallback(
    (name) => {
      return 'Toggle to Play toggle with : ' + name;
    },
    []
  );

  return (
    <div>
      <Child returnComment={returnComment} />

      <button onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  );
};

export default AAuseCallBack;
