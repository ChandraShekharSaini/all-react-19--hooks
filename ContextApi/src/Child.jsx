import React, { useContext } from "react";
import { ChildContext } from "./context/PersonalContext1";

const Child = () => {
  const value = useContext(ChildContext);

  return (
    <div

      style={{
        width: "50%",
        border: "4px solid green",
        margin: "auto",
        padding: "20px 0",
      }}
    > 
          <h4>I am Child</h4>
      <p>Child Name:{value.name}</p>
      <p>Child Age:{value.age}</p>

    </div>
  );
};

export default Child;
