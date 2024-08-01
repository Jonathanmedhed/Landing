import React from "react";
import { useTranslation } from "react-i18next";
import ImageComponent from "./ImageComponent";

export const CatPopUp = ({ box, className, cats, start }) => {
  const { i18n } = useTranslation();

  const currentLanguage = () => i18n.language || window.localStorage.i18nextLng;

  return (
    <div
      className={`cat-popup ${className ? className : ""} ${
        start ? "--pop" : ""
      }`}
    >
      <div className="cat-popup__container">
        {cats.map((cat, i) => (
          <ImageComponent
            alt=""
            className={`cat ${cat.className ? cat.className : ""} ${
              currentLanguage() === cat.nationality ? "--meow" : ""
            }`}
            key={i}
            src={cat.img}
          />
        ))}
        <ImageComponent alt="" className="barrel" src={box} />
      </div>
    </div>
  );
};
