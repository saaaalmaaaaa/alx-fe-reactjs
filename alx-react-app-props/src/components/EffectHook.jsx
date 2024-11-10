import React, { useState, useEffect } from 'react';

function EffectHook() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Counter has started!');

  // Effect with no dependency array - runs on every render
  useEffect(() => {
    console.log('Component rendered');
  });

  // Effect with an empty dependency array - runs only once on mount
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted'); // Cleanup when component unmounts
    };
  }, []);

  // Effect with `count` as a dependency - runs every time `count` changes
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]);

  // Effect with `message` as a dependency - runs every time `message` changes
  useEffect(() => {
    console.log(`Message updated: ${message}`);
  }, [message]);

  // Setting up an interval and cleaning it up on unmount
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 100);

    // Cleanup function to clear interval on unmount
    return () => clearInterval(interval);
    
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setMessage(`Message updated at count ${count}`)}>
        Update Message
      </button>
      <p>{message}</p>
    </div>
  );
}

export default EffectHook;
