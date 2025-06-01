import React from "react";
import GrandFather from "./GrandFather";
import PersonalContext from "./context/PersonalContext";
import PersonalContext1 from "./context/PersonalContext1";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ContextAPi</h1>

      <PersonalContext>
        <PersonalContext1>
          <GrandFather />
        </PersonalContext1>
      </PersonalContext>
    </div>
  );
};

export default App;
