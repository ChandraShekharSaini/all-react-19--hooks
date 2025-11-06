import React, { Component } from "react";
import PropTypes from "prop-types";

class ClassComponent extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <p>
        Hello !! Myselfe {name} and age {age}
      </p>
    );
  }
}

ClassComponent.propType = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

ClassComponent.defaultProps = {
  name: "Chandra",
  age: 21,
};

export default ClassComponent;
