import React from "react";

export const Image = ({ alt, className, key, src, action }) => {
  return (
    <span onClick={action}>
      <img alt={alt} className={className} key={key} src={src} />
    </span>
  );
};
