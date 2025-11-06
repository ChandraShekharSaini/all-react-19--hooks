import React, { createContext } from "react";

const FatherContext = createContext({
  name: "",
  age: "",
});

const PersonalContext = ({ children }) => {

  
  const FatherData = {
    name: "Karambeer Singh",
    age: 50,
  };

  return (
    <FatherContext.Provider value={FatherData}>
      {children}
    </FatherContext.Provider>
  );
};

export default PersonalContext;
export { FatherContext };
