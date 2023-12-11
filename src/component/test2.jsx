import React, { useState } from 'react';

const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = (setter) => {
    setter(prevCount => prevCount + 1);
  };

  const decrement = (setter) => {
    if (setter === setCount1 && count1 === 0) {
      return;
    }
    setter(prevCount => prevCount - 1);
  };

  return (
    <div>
      <div>
        <span>{count1}</span>
        <button onClick={() => increment(setCount1)}>+</button>
        <button onClick={() => decrement(setCount1)}>-</button>
      </div>
      <div>
        <span>{count2}</span>
        <button onClick={() => increment(setCount2)}>+</button>
        <button onClick={() => decrement(setCount2)}>-</button>
      </div>
    </div>
  );
};

export default Counter;