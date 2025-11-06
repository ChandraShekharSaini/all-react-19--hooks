import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav style={{backgroundColor:"red", height:"50px", font:"white" , display:"flex" , flexDirection:"row" , alignItems:"center" , gap:"10px" , textDecoration:"none"}}>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/service"}>Service</Link>
    </nav>
  );
};

export default Home;
