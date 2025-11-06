import React from "react";

import {
  increament,
  decreament,
  setZero,
  increaseByNum,
} from "./store/CounterSlice";
import { useSelector, useDispatch } from "react-redux";

const CounterApp = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const containerStyle = {
    width: "80%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: "10px",
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <button onClick={() => dispatch(increament())} style={buttonStyle}>
        +
      </button>

      <span>{count}</span>

      <button onClick={() => dispatch(decreament())} style={buttonStyle}>
        -
      </button>

      <button onClick={() => dispatch(setZero())} style={buttonStyle}>
        Set Zero
      </button>

      <button onClick={() => dispatch(increaseByNum(10))} style={buttonStyle}>
        Increase By 10
      </button>
    </div>
  );
};

export default CounterApp;
