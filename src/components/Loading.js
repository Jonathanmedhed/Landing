import React from "react";
import ImageComponent from "./ImageComponent";
import spinner from "../images/bouncing-circles.svg";

export const Loading = ({ className }) => {
  return (
    <div className={`loading ${className ? className : ""}`}>
      <ImageComponent alt="loading.." src={spinner} />
    </div>
  );
};
