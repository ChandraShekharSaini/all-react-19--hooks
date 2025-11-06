import React, { useRef } from "react";
import InputFiled from "./InputRef";

const UseRef1 = () => {
  const InputR = useRef();

  const handleChange = ()=>{
 
    InputR.current.style = "red"
    InputR.current.focus()
    InputR.current.value = 1222

  }
  return (
    <div>
      <InputFiled ref={InputR} />
    
      <button onClick={handleChange}>Click Here</button>
    </div>
  );
};

export default UseRef1;
