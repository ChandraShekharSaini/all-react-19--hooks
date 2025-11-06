import React from "react";
import GrandFather from "./GrandFather";
import ChildContext from "./context/ChildContext";
import FatherContext from "./context/FatherContext";

const App = () => {
  return (
    <div>
      <FatherContext>
        <ChildContext>
          <GrandFather />
        </ChildContext>
      </FatherContext>
    </div>
  );
};

export default App;
