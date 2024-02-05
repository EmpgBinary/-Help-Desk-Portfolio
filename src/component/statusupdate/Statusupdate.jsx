import React from "react";
import "./statusupdate.css";
import Status from "../assets/p5B.png";
import Navbar from "../navbar/Navbar";

const Statusupdate = () => {
  return (
    <div>
      <Navbar />

      <div className="status">
        <div className="statusImg">
          <img src={Status} alt="statusImg" />
        </div>
        <div className="statusText">
          <h1>Registration Successful!!!!</h1>
        </div>
      </div>
    </div>
  );
};

export default Statusupdate;
