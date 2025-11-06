import React, { useRef } from "react";
import UseImperativeRefChild from "./UseImperativeRefChild";

const UseImperativeRefParent = () => {
  const inputRef = useRef();
  return (
    <div>
      <UseImperativeRefChild ref={inputRef} />
      <br/>
       <br/>
      <button onClick={()=>inputRef.current.styleInput()}>Style</button>
      <br />
      <br />
      <button  onClick={()=>inputRef.current.focusInput()}>Focus</button>
      <br />
      <br />
      <button onClick={()=>inputRef.current.clearInput()}>Clear</button>
    </div>
  );
};

export default UseImperativeRefParent;
