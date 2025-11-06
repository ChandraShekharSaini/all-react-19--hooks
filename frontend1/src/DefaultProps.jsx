import React from "react";
import PropType from "prop-types";

//Deafault Props ans Validation
const App = ({ name, age, skills }) => {
  return (
    <section>
      <p>
        My selfe {name} and age is {age}
      </p>
    </section>
  );
};

App.propsType = {
  name: PropType.string.isRequired,
  age: PropType.number.isRequired,
  skills: PropType.array.isRequired,
};

App.defaultProps = {
  name: "Chnadra",
  age: 89,
  skills: ["Software Enginering"],
};

export default App;
