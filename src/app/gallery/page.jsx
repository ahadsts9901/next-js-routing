import React from "react";
import Nav from "../components/nav";
import { Image } from "react-bootstrap-icons";

const gallery = () => {
  return (
    <div className="main">
      <Nav />
      <div className="mid">
        <h1 className="text-[1.8em]">Next JS Routing</h1>
        <Image className="icon" />
        <h1 className="text-[1.5em]">Gallery</h1>
      </div>
    </div>
  );
};

export default gallery;
