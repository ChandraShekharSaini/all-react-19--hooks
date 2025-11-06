import React from "react";
import { createContext } from "react";

const AddressContectChild = createContext({
  city: "",
  state: "",
});

const ChildContext = ({ children }) => {
  const ChildData = {
    city: "Lucknow",
    state: "Uttar Pradesh",
  };
  return (
    <AddressContectChild.Provider value={ChildData}>
      {children}
    </AddressContectChild.Provider>
  );
};

export default ChildContext;
export { AddressContectChild };
