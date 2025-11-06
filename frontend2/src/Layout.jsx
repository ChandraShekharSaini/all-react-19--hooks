import React from "react";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div style={{ border: "4px solid blue", padding: "10px" }}>
      <h1>I am Layout Page</h1>

      {children}
    </div>
  );
};

export default Layout;
