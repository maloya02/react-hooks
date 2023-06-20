import React, { useEffect, useState } from 'react';
import axios from 'axios';
const AAuseEffect = () => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);
  useEffect(() => {
    let source = axios.CancelToken.source();
    axios
      .get('https://jsonplaceholder.typicode.com/comments', {
        cancelToken: source.token
      })
      .then(response => {
        setData(response.data[0].email);
        console.log('API was called');
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          console.log('Error:', error.message);
        }
      });

    return () => {
      source.cancel('Cleanup: Request canceled');    // clean up
      console.log('Request canceled successfully');
    };
  }, [count]);
  return (
    <div>
      <h4>AAuseEffect</h4>
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};
export default AAuseEffect;

// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third]) snippet

