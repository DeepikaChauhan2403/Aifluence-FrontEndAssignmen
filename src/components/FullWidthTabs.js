import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./FullWidthTabs.css";

import bmw from "../assets/bmw.svg";
import netflix from "../assets/netflix.svg";
import amex from "../assets/amex.svg";
import play from "../assets/play.svg";
import info from "../assets/info.svg";
import Item from "./chart/Item";
import Bar from "./chart/BarGraph";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "98%",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const data = [15, 6, 10],
    showLabel = false,
    colors = ["#F087B1", "#4B6188", "#1DA1F2"],
    radius = 62,
    hole = 52,
    stroke = 1,
    strokeWidth = 7;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{ boxShadow: "unset" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{ background: "white", boxShadow: "unset" }}
        >
          <Tab  style={{ fontSize: "18px", fontWeight: "bold" , padding: "0px 25px"}} label="OVERVIEW" {...a11yProps(0)} />
          <Tab style={{ fontSize: "18px" , fontWeight: "bold" , padding: "0px 25px"}} label="AUDIENCE" {...a11yProps(1)} />
          <Tab  style={{ fontSize:"18px" , fontWeight: "bold" , padding: "0px 25px" }} label="CONTENT" {...a11yProps(2)} />
          <Tab style={{ fontSize: "18px" , fontWeight: "bold" , padding: "0px 25px"}} label="MANAGE" {...a11yProps(4)} disabled />
          <Tab label="" {...a11yProps(5)} disabled />
          <Tab  label="" {...a11yProps(6)} disabled />
          <Tab  label="" {...a11yProps(7)} disabled />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div>
            <div className="uni">
              <div className="card-one">
                <h4 className="card-one-heading">INSIGHTS</h4>
                <div
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: "14px",
                  }}
                >
                  <b>4.5%</b>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    paddingTop: "5px",
                    justifyContent: "center",
                  }}
                >
                  <p className="insight-card-one-content">Avg Views: 3.3k</p>
                  <p className="insight-card-one-content">Avg Comments: 9</p>
                  <p className="insight-card-one-content">Avg Likes: 213</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    paddingTop: "10px",
                    justifyContent: "center",
                  }}
                >
                  <p className="insight-card-one-content">Avg Views: 3.3k</p>
                  <p className="insight-card-one-content">Avg Views: 3.3k</p>
                </div>
              </div>
              <div className="card-one">
                <h4 className="card-one-heading">FOLLOWERS CREDEBILITY  <img src={info} alt="info" /></h4> 
                <div className="ins-mid" style={{ paddingTop: "25px" }}>
                 <b> 83.64%</b>
                </div>
              </div>
              <div className="card-one">
                <h4 className="card-one-heading">BRAND AFFINITY</h4>
                <div
                  className="uni"
                  style={{ justifyContent: "center", paddingTop: "7px" }}
                >
                  <div>
                    <p className="brand-content">
                      <img src={bmw} alt="bmw" />
                      BMW
                    </p>
                  </div>
                  <div>
                    <p className="brand-content">
                      <img src={netflix} alt="netflix" />
                      Netflix
                    </p>
                  </div>
                  <div>
                    <p className="brand-content">
                      <img src={amex} alt="amex" />
                      Amex
                    </p>
                  </div>
                  <div>
                    <p className="brand-content">
                      <img src={play} alt="play" />
                      Playstation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="uni">
              <div className="card-two">
                <h4 className="card-two-content-heading">
                  INFLUENCER INTEREST
                </h4>
                <div className="card-two-content">
                  <p>Friends, Family & Relationships</p>
                  <p>Friends, Family & Relationships</p>
                  <p>Friends, Family & Relationships</p>
                  <p>Friends, Family & Relationships</p>
                  <p>Friends, Family & Relationships</p>
                </div>
              </div>
              <div className="card-two">
                <h4 className="card-two-content-heading">POST TOPICS</h4>
                <div className="card-two-content">
                  <p>raghudixit</p>
                  <p>bangalore</p>
                  <p>gokamabeach</p>
                  <p>magictrics</p>
                  <p>legomovie</p>
                </div>
              </div>
              <div className="card-two">
                <h4 className="card-two-content-heading">POST TOPICS</h4>
                <div className="card-two-content">
                  <p>raghudixit</p>
                  <p>bangalore</p>
                  <p>gokamabeach</p>
                  <p>magictrics</p>
                  <p>legomovie</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="card-heading"><b>AUDIENCE</b></p>
            <div className="uni">
              <div className="card-two">
                <h4 className="card-two-content-heading">REACHABILITY</h4>
                <div className="card-two-content">
                  <p>Friends, Family & Relationships</p>
                  <p>Friends, Family & Relationships</p>
                  <p>Friends, Family & Relationships</p>
                  <p>Friends, Family & Relationships</p>
                  <p>Friends, Family & Relationships</p>
                </div>
              </div>

              {/* Bargraph */}
              <div className="card-two">
                <h4 className="card-two-content-heading">REACHABILITY</h4>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div>
                    <div
                      className="bar-graph"
                      style={{
                        height: "100px",
                        backgroundColor: "#4299E1",
                        width: "20px",
                      }}
                    >
                      <div
                        style={{
                          height: "60px",
                          backgroundColor: "#F7F7F7",
                          width: "20px",
                        }}
                      ></div>
                    </div>
                    <p className="content-tst">{"<500 Followings"}</p>
                  </div>
                  <div>
                    <div
                      className="bar-graph"
                      style={{
                        height: "100px",
                        backgroundColor: "#4299E1",
                        width: "20px",
                      }}
                    >
                      <div
                        style={{
                          height: "20px",
                          backgroundColor: "#F7F7F7",
                          width: "20px",
                        }}
                      ></div>
                    </div>
                    <p className="content-tst">500-1k Followings</p>
                  </div>
                  <div>
                    <div
                      className="bar-graph"
                      style={{
                        height: "100px",
                        backgroundColor: "#4299E1",
                        width: "20px",
                      }}
                    >
                      <div
                        style={{
                          height: "30px",
                          backgroundColor: "#F7F7F7",
                          width: "20px",
                        }}
                      ></div>
                    </div>
                    <p className="content-tst">1-1.5k Followings</p>
                  </div>
                  <div>
                    <div
                      className="bar-graph"
                      style={{
                        height: "100px",
                        backgroundColor: "#4299E1",
                        width: "20px",
                      }}
                    >
                      <div
                        style={{
                          height: "40px",
                          backgroundColor: "#F7F7F7",
                          width: "20px",
                        }}
                      ></div>
                    </div>
                    <p className="content-tst">{">1.5k Followings"}</p>
                  </div>
                </div>
              </div>

              {/* Pia chart */}
              <div className="card-two">
                <h4 className="card-two-content-heading">
                  GENDER DISTRIBUTION
                </h4>
                <div style={{ textAlign: "center" }}>
                  {/* chart here doughnut */}
                  <Item
                    data={data}
                    colors={colors}
                    radius={radius}
                    hole={hole}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    showLabel={showLabel}
                  />
                  <div style={{ width: "40px", height: "26px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "26px",
                        position: "relative",
                        bottom: "128px",
                        left: "233px",
                      }}
                    >
                      <p style={{ color: "#1DA1F2", fontSize: "9px" }}>Male</p>
                      <p style={{ fontSize: "9px" }}>38%</p>
                    </div>
                    <div
                      style={{
                        width: "40px",
                        height: "26px",
                        position: "relative",
                        bottom: "68px",
                        left: "244px",
                      }}
                    >
                      <p style={{ color: "#F087B1", fontSize: "9px" }}>
                        Female
                      </p>
                      <p style={{ fontSize: "9px" }}>33%</p>
                    </div>
                    <div
                      style={{
                        width: "40px",
                        height: "26px",
                        position: "relative",
                        bottom: "147px",
                        left: "85px",
                      }}
                    >
                      <p style={{ color: "#4B6188", fontSize: "9px" }}>
                        Unknown
                      </p>
                      <p style={{ fontSize: "9px" }}>29%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="card-heading"><b>CONTENT</b></p>
            </div>
            <div></div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div>
            <p className="card-heading"><b>AUDIENCE</b></p>
            <div className="uni">
              <div className="card-two">
                <h4 className="card-two-content-heading">REACHABILITY</h4>
                <div className="card-two-content">
                  <p>Friends, Family & Relationships</p>
                  <p>Friends, Family & Relationships</p>
                  <p>Friends, Family & Relationships</p>
                  <p>Friends, Family & Relationships</p>
                  <p>Friends, Family & Relationships</p>
                </div>
              </div>

              {/* Bargraph */}
              <div className="card-two">
                <h4 className="card-two-content-heading">REACHABILITY</h4>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div>
                    <div
                      className="bar-graph"
                      style={{
                        height: "100px",
                        backgroundColor: "#4299E1",
                        width: "20px",
                      }}
                    >
                      <div
                        style={{
                          height: "60px",
                          backgroundColor: "#F7F7F7",
                          width: "20px",
                        }}
                      ></div>
                    </div>
                    <p className="content-tst">{"<500 Followings"}</p>
                  </div>
                  <div>
                    <div
                      className="bar-graph"
                      style={{
                        height: "100px",
                        backgroundColor: "#4299E1",
                        width: "20px",
                      }}
                    >
                      <div
                        style={{
                          height: "20px",
                          backgroundColor: "#F7F7F7",
                          width: "20px",
                        }}
                      ></div>
                    </div>
                    <p className="content-tst">500-1k Followings</p>
                  </div>
                  <div>
                    <div
                      className="bar-graph"
                      style={{
                        height: "100px",
                        backgroundColor: "#4299E1",
                        width: "20px",
                      }}
                    >
                      <div
                        style={{
                          height: "30px",
                          backgroundColor: "#F7F7F7",
                          width: "20px",
                        }}
                      ></div>
                    </div>
                    <p className="content-tst">1-1.5k Followings</p>
                  </div>
                  <div>
                    <div
                      className="bar-graph"
                      style={{
                        height: "100px",
                        backgroundColor: "#4299E1",
                        width: "20px",
                      }}
                    >
                      <div
                        style={{
                          height: "40px",
                          backgroundColor: "#F7F7F7",
                          width: "20px",
                        }}
                      ></div>
                    </div>
                    <p className="content-tst">{">1.5k Followings"}</p>
                  </div>
                </div>
              </div>

              {/* Paichart */}
              <div className="card-two">
                <h4 className="card-two-content-heading">
                  GENDER DISTRIBUTION
                </h4>
                <div style={{ textAlign: "center" }}>
                  {/* chart here doughnut */}
                  <Item
                    data={data}
                    colors={colors}
                    radius={radius}
                    hole={hole}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    showLabel={showLabel}
                  />
                  <div style={{ width: "40px", height: "26px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "26px",
                        position: "relative",
                        bottom: "128px",
                        left: "233px",
                      }}
                    >
                      <p style={{ color: "#1DA1F2", fontSize: "9px" }}>Male</p>
                      <p style={{ fontSize: "9px" }}>38%</p>
                    </div>
                    <div
                      style={{
                        width: "40px",
                        height: "26px",
                        position: "relative",
                        bottom: "68px",
                        left: "244px",
                      }}
                    >
                      <p style={{ color: "#F087B1", fontSize: "9px" }}>
                        Female
                      </p>
                      <p style={{ fontSize: "9px" }}>33%</p>
                    </div>
                    <div
                      style={{
                        width: "40px",
                        height: "26px",
                        position: "relative",
                        bottom: "147px",
                        left: "85px",
                      }}
                    >
                      <p style={{ color: "#4B6188", fontSize: "9px" }}>
                        Unknown
                      </p>
                      <p style={{ fontSize: "9px" }}>29%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div>
            <div>
              <p className="card-heading"><b>CONTENT</b></p>
            </div>
            <div></div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Four
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
