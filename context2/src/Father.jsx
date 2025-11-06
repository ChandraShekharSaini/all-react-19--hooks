import React from "react";
import Child from "./Child";
import { AddressContectFather } from "./context/FatherContext";
import { useContext } from "react";

const Father = () => {
  const value = useContext(AddressContectFather);
  return (
    <div
      style={{
        border: "1px solid red",
        width: "70%",
       padding:"20px 20px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Father</h1>

      <p>City:{value.city}</p>
      <p>Sate:{value.state}</p>

      <Child />
    </div>
  );
};

export default Father;
