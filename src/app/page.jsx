import React from "react";
import Nav from "./components/nav";
import { HouseFill } from "react-bootstrap-icons";

const home = () => {
  return (
    <div className="main">
      <Nav />
      <div className="mid">
        <h1 className="text-[1.8em]">Next JS Routing</h1>
        <HouseFill className="icon" />
        <h1 className="text-[1.5em]">Home</h1>
      </div>
    </div>
  );
};

export default home;