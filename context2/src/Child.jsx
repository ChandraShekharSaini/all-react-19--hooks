import React from "react";
import { useContext } from "react";
import { AddressContectChild } from "./context/ChildContext";

const Child = () => {
  const value = useContext(AddressContectChild);
  return (
    <div
      style={{
        border: "1px solid red",
        width: "50%",
       padding:"20px 20px",
        textAlign: "center",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <h1>Child</h1>

      <p>City:{value.city}</p>
      <p>Sate:{value.state}</p>
    </div>
  );
};

export default Child;
