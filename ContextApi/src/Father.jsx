import React, { useContext } from "react";
import Child from "./Child";
import { FatherContext } from "./context/PersonalContext";

const Father = () => {
  const value = useContext(FatherContext);

  return (
    <div
      style={{
        width: "70%",
        border: "4px solid green",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "50px 10px",
        alignItems: "center",
      }}
    >
      <h3>I am Father</h3>

      <p>Father Name:{value.name}</p>
      <p>Father Age:{value.age}</p>
      <Child />
    </div>
  );
};

export default Father;
