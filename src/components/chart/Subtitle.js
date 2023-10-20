import React from "react";

const SubTitle = ({
  radius,
  fill,
  textAnchor,
  subTitle1,
  subTitle2,
  currency,
}) => {
  return (
    <text x={radius} y={radius} textAnchor={textAnchor}>
      <tspan style={{ color: "black", fontSize: "20px" }}>{subTitle1}</tspan>
      <tspan x={radius} y={radius + 20} style={{ color: "#D7D7D7" }}>
        {/* {currency} */}
        {subTitle2}
      </tspan>
    </text>
  );
};

export default SubTitle;
//
