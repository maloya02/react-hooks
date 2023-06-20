import React, { useEffect, useState } from 'react';

// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third]) snippet

const AAuseEffect2 = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {

    let isMounted = true;

    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      // .then(json => setItems(json));
      .then(json => {
        if (isMounted) {
          setItems(json);
        }
      })
      .catch(error => {
        console.error(error);
      });
      console.log("render || x times called");
    return () => {
      isMounted = false;    // clean up
    };
  }, [resourceType]);

  const handleExpandCollapse = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      <button onClick={handleExpandCollapse}>
        {expanded ? 'Collapse All' : 'Expand All'}
      </button>
      {expanded && (
        <div>
          {items.map(item => (
            <pre>{JSON.stringify(item)}</pre>
          ))}
        </div>
      )}
    </>
  );
};

export default AAuseEffect2;
