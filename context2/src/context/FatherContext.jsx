import React from "react";
import { createContext } from "react";

const AddressContectFather = createContext({
  city: "",
  state: "",
});

const FatherContext = ({ children }) => {
  const FatherData = {
    city: "Mathura",
    state: "Uttar Pradesh",
  };

  return (
    <AddressContectFather value={FatherData}>{children}</AddressContectFather>
  );
};

export default FatherContext;
export { AddressContectFather };
