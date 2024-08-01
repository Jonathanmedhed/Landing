import React from "react";
import { useTranslation } from "react-i18next";

const Card = ({ className, img, index, title, text }) => {
  const { t } = useTranslation();

  return (
    <div className={`card ${className ? className : ""}`} key={index}>
      <div className="card__top">
        <div className="card__img">{img}</div>
        <div className="card__title">
          <h3>{t(title)}</h3>
        </div>
      </div>
      <div className="card__bot">
        <p>{t(text)}</p>
      </div>
    </div>
  );
};

export const Cards = ({ cards, className }) => {
  return (
    <div className={`cards ${className ? className : ""}`}>
      {cards?.map((card, i) => (
        <Card
          className={card.className}
          img={card.img}
          index={i}
          title={card.title}
          text={card.text}
        />
      ))}
    </div>
  );
};
