import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addNum, decreament, increament, setZero } from "./store/CounterSlice";

const CounterApp = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  console.log(count);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    textAlign: "center",
    width: "90%",
    margin: "auto",
  };

  const buttonStle = {
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <button onClick={() => dispatch(increament())} style={buttonStle}>
        +
      </button>
      <span>{count}</span>
      <button onClick={() => dispatch(decreament())} style={buttonStle}>
        -
      </button>

      <button onClick={() => dispatch(setZero())} style={buttonStle}>
        Set Zero
      </button>

      <button onClick={() => dispatch(addNum(10))} style={buttonStle}>
        Increase by 10
      </button>
    </div>
  );
};

export default CounterApp;
