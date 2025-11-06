import React from "react";
import Father from "./Father";

const GrandFather = () => {
  return (
    <div style={{ border: "1px solid red", width: "90%", textAlign:"center", padding:"20px 20px", margin: "auto",display:"flex",flexDirection:"column", justifyContent:"center",alignContent:"center" }}>
      <h1>GrandFather</h1>

      <Father/>
    </div>
  );
};

export default GrandFather;
