import React from "react";
import useCounter from "./customHook/CounterFunction";

const CounterApp = () => {
  const { count, increament, decreament, setZero } = useCounter(12);

  return (
    <section style={{ textAlign: "center" }}>
      <h1>Custom Hook</h1>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          textAlign: "center",
        }}
      >
        <button
          onClick={() => decreament()}
          style={{
            padding: "5px 0",
            backgroundColor: "black",
            outline: "none",
            color: "white",
          }}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => increament()}
          style={{
            padding: "5px 0",
            backgroundColor: "black",
            outline: "none",
            color: "white",
          }}
        >
          +
        </button>

        <button
          onClick={() => setZero()}
          style={{
            padding: "5px 0",
            backgroundColor: "black",
            outline: "none",
            color: "white",
          }}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default CounterApp;
