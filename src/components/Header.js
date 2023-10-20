import React from "react";
import "./home.css";
import card from "../assets/card_1.png";
import verified_user from "../assets/Verified User.png";
import insta from "../assets/Instagram.png";
import tweet from "../assets/Twitter.png";
import fb from "../assets/FaceBook.png";
import check from "../assets/check-one.png";
import usa from "../assets/usa.png";
import heart from "../assets/heart.svg";
import id from "../assets/id.svg";
import medal from "../assets/medal.svg";
import info from "../assets/info.svg";
import twitter from "../assets/twitter-sub.svg";
import FaceBook from "../assets/fb-tweet.svg";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import WarningIcon from "@material-ui/icons/Warning";
import { CircularProgress } from "@material-ui/core";
import Item from "./chart/Item";
import zIndex from "@material-ui/core/styles/zIndex";

const Header = () => {
  const data = [9.8, 3, 4, 7.8],
    subTitle1 = "34,789",
    subTitle2 = "Total Fans",
    currency = "\u20B9",
    showLabel = false,
    colors = ["#F087B1", "#4B6188", "#D7D7D7", "#1DA1F2"],
    radius = 76,
    hole = 65,
    stroke = 1,
    strokeWidth = 10;

  return (
    <>
      {/* main header contents */}
      <div className="horizontal-card" style={{ background: "white"}}>
        <div className="image">
          <img  className="profile-img"src={card} alt="Card Image" />
          <img className="logo" src={verified_user} alt="logo"/>
        </div>
        <div className="content" style={{ padding: "10px 10px 10px 20px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "-40px",
              marginBottom: "-19px",
            }}
          >
            <h3>Zoe Sennett</h3>
            <div
              style={{ display: "flex", flexWrap: "wrap", marginLeft: "17px" }}
            >
              <div className="icon-container">
                <div className="circular-icon">
                  <img src={insta} alt="insta Image" />
                </div>
                <div className="tick-mark">
                  <img src={check} alt="check Image" />
                </div>
              </div>

              <div className="icon-container">
                <div className="circular-icon">
                  <img src={tweet} alt="tweet Image" />
                </div>
                <div className="tick-mark">
                  <img src={check} alt="check 2 Image" />
                </div>
              </div>

              <div className="icon-container">
                <div className="circular-icon">
                  <img src={fb} alt="fb Image" />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                marginLeft: "26px",
              }}
            >
              <LocationOnIcon className="content-header" />
              <p style={{color: "#94a2b3", fontSize: "20px"}}>Chicago, USA</p>
              <img
                src={usa}
                alt="usa Image"
                style={{ width: "24.149px", height: "16px", marginLeft: "4px" }}
              />
            </div>
          </div>
          <div>
            <div className="card-content-header">
              <img src={heart} alt="heart" />
              <p className="content-header">Fashion, Cosmetics, Design</p>
            </div>
            <div className="card-content-header">
              <img src={id} alt="id" style={{ marginTop: "-20px"}} />
              <p className="content-header">
                My name is Helena and I'm an influencer from Sweden that loves
                to take beautiful pictures that inspire. I'm purposeful,
                committed and love to being creative.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between"}}>
            <div style={{ display: "flex", gap: "10px" }}>
              <p className="btn-content-header">+ Add to Campaign</p>
              <p className="btn-content-header-one">
                <LocalOfferIcon className=" icon-content-header" />
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px"}}>
              <div style={{ marginTop: "-5px" }}>
                <img src={medal} alt="medal" />
              </div>
              <div>
                <p className="btn-content-header-two">
                  <span style={{ color: "white" }}>
                    79
                    <span style={{ color: "white", fontSize: "8px" }}>
                      /100
                    </span>
                  </span>
                </p>
                <p style={{ color: "#219653" }}><b>Excellent</b></p>
                <div
                  style={{
                    color: "#94A2B3",
                    fontSize: "8px",
                    display: "flex",
                    gap: "4px",
                  }}
                >
                  <p>Quality Score</p>
                  <img src={info} alt="info" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* main header content end  */}

      {/* sub header content  */}
      <div className="subheader-content">
        <div className="subheader-card-content">
          <p
            style={{
              color: "#94A2B3",
              textAlign: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            INFLUENCE
          </p>
          <div style={{ textAlign: "center", paddingBottom: "20px" }}>
            <span style={{ color: "black", fontSize: "14px" }}>
              88
              <span style={{ color: "#94A2B3", fontSize: "8px" }}>/100</span>
            </span>
          </div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <CircularProgress
              style={{ color: "#1DA1F2", width: "48px" }}
              variant="determinate"
              value={75}
              thickness={5}
              sx={{ "& circle": { r: 80 } }}
            />
            <img
              style={{ position: "relative", right: "28px", bottom: "12px" }}
              src={twitter}
              alt="tweets"
            />
            <CircularProgress
              style={{ color: "#4B6188", width: "48px" }}
              variant="determinate"
              value={75}
              thickness={5}
              sx={{ "& circle": { r: 80 } }}
            />
            <img
              style={{ position: "relative", right: "28px", bottom: "12px" }}
              src={FaceBook}
              alt="face"
            />
          </div>
        </div>
        <div className="subheader-card-content">
          <p
            style={{
              color: "#94A2B3",
              textAlign: "center",
              paddingTop: "10px",
            }}
          >
            ENGAGEMENT
          </p>
          <div style={{  paddingBottom: "20px", position: "relative" , left: "40%" }}>
            <span style={{ color: "black", textAlign: "center", fontSize: "20px", fontWeight:"bolder" }}>
              4.5% &nbsp;
              <WarningIcon
                style={{
                  alignItems: "center",
                  color: "#B00020",
                  width: "14px",
                  height: "14px",
                  marginTop: "6px",
                }}
              />
              <span style={{ color: "#94A2B3", fontSize: "8px" }}>
                vs 9% average
              </span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <div>
              <div>
                <span style={{ color: "#94A2B3", fontSize: "8px" }}>2.3%</span>
                <br />
                <img className="sub-header-logo" src={twitter} alt="twitter" />
              </div>
            </div>
            <div>
              <div>
                <span style={{ color: "#94A2B3", fontSize: "8px" }}>2.3%</span>
                <br />
                <img
                  className="sub-header-logo"
                  src={FaceBook}
                  alt="FaceBook"
                />
              </div>
            </div>
            <div>
              <div>
                <span style={{ color: "#94A2B3", fontSize: "8px" }}>2.3%</span>
                <br />
                <img className="sub-header-logo" src={insta} alt="insta" />
              </div>
            </div>
          </div>
        </div>
        <div className="subheader-card-content" style={{ textAlign: "center" }}>
          <Item
            data={data}
            subTitle1={subTitle1}
            subTitle2={subTitle2}
            colors={colors}
            radius={radius}
            hole={hole}
            stroke={stroke}
            strokeWidth={strokeWidth}
            showLabel={showLabel}
            currency={currency}
          />
          <div
            style={{
              fontSize: "9px",
              position: "relative",
              bottom: "138px",
              left: "178px",
              width: "192px",
            }}
          >
            <p style={{ color: "#1DA1F2" }}>Twitter</p>
            <p>7.8k</p>
          </div>
          <div
            style={{
              fontSize: "9px",
              position: "relative",
              bottom: "67px",
              width: "240px",
              left: "158px",
            }}
          >
            <p style={{ color: "#F087B1" }}>Instagram</p>
            <p>9.3k</p>
          </div>
          <div
            style={{
              fontSize: "9px",
              position: "relative",
              bottom: "118px",
              width: "179px",
            }}
          >
            <p style={{ color: "#4B6188" }}>Facebook</p>
            <p>3k</p>
          </div>
        </div>
      </div>
      {/* sub header content end  */}
    </>
  );
};

export default Header;
