import React from "react";
import "./content.css";
import tabinsta from "../assets/tab-insta.svg";
import tabfb from "../assets/tab-fb.svg";
import tabtweet from "../assets/tab-tweet.svg";
import FullWidthTabs from "./FullWidthTabs";

const Tabcontent = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "18px",
          justifyContent: "end",
          marginRight: "29px",
          background: "white",
        }}
      >
        <div className="tab-insta-logo">
          <img src={tabinsta} alt="tabinsta" />
        </div>
        <div className="tab-logo">
          <img src={tabfb} alt="tabfb" />
        </div>
        <div className="tab-logo">
          <img src={tabtweet} alt="tabtweet" />
        </div>
      </div>
      <div style={{ background: "white" }}>
        <FullWidthTabs />
      </div>
    </>
  );
};

export default Tabcontent;
