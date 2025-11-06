import React from "react";
import { useState } from "react";

const StateVsvariable = () => {
  let count = 0;
  const [val, setval] = useState(0);

  const handleCount = () => {
    count++;
    setval(val + 1);
  };

  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button style={{ padding: "5px 5px" }} onClick={handleCount}>
        Click
      </button>

      <p>Vaiable(Value of Varibale will mot change on UI) : {count}</p>
      <p>State(Value of State will  change on UI) : {val}</p>
    </div>
  );
};

export default StateVsvariable;
