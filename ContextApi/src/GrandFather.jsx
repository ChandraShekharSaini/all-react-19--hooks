import React from "react";
import Father from "./Father";

const GrandFather = () => {
  return (
    <>
      <div style={{ width: "90%", border: "4px solid red", margin: "auto" ,textAlign:"center" , padding:"20px"}}>
        <h1>I am GrandFather</h1>
        <Father />
      </div>
    </>
  );
};

export default GrandFather;
