import React, { useImperativeHandle } from "react";
import { useRef } from "react";

const UseImperativeRefChild = (props) => {
  console.log(props.ref);

  const  inputRef = useRef();

  useImperativeHandle(props.ref,() =>({
       focusInput() {
        inputRef.current.focus();
      },

      styleInput() {
        inputRef.current.style.backgroundColor = "red";
      },

       clearInput() {
        inputRef.current.value = ""
      }
    }),
    []
  );

  return <input placeholder="Enter Data" ref={inputRef} />;
};

export default UseImperativeRefChild;
