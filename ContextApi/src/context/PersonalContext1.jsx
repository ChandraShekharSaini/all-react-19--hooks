import React, { createContext } from "react";

const ChildContext = createContext({
  name: "",
  age: "",
});

const PersonalContext1 = ({ children }) => {
  const ChildData = {
    name: "Chandra Shekhar Saini",
    age: 21,
  };

  return (
    <ChildContext.Provider value={ChildData}>
      {children}
    </ChildContext.Provider>
  );
};

export default PersonalContext1;
export { ChildContext };
