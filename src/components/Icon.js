import React from "react";
import ImageComponent from "./ImageComponent";
import copyIcon from "../images/copy.svg";
import { LinkComponent } from "./LinkComponent";

export const Icon = ({
  alt,
  icon,
  index,
  link,
  linkDesktop,
  onClick,
  isActive,
}) => {
  return (
    <div className={`icon ${isActive ? "--active" : ""}`} index={index}>
      {linkDesktop ? (
        <span className="icon__container" onClick={onClick} onKeyDown={onClick}>
          <ImageComponent alt={alt} className="icon__img" src={icon} />
        </span>
      ) : (
        <LinkComponent
          className="icon__link"
          content={
            <ImageComponent alt={alt} className="icon__img" src={icon} />
          }
          link={`${link}`}
          isOuterLink={true}
        />
      )}
      {linkDesktop && isActive && (
        <span className="icon__info">
          <span>{linkDesktop}</span>
          <span
            className="icon__container"
            onClick={() => {
              navigator.clipboard.writeText(linkDesktop);
            }}
            onKeyDown={() => {
              navigator.clipboard.writeText(linkDesktop);
            }}
          >
            <ImageComponent alt="copy" className="icon__copy" src={copyIcon} />
          </span>
        </span>
      )}
    </div>
  );
};
