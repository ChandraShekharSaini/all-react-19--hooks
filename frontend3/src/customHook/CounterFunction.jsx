import React from "react";
import { useState } from "react";

const useCounter = (initialValue) => {
  
  const [count, setCount] = useState(initialValue);

  const increament = () => {
    setCount(count + 1);
  };

  const decreament = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const setZero = () => {
    setCount(0);
  };

  return { count, increament, decreament, setZero };
};

export default useCounter;
