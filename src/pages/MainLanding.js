import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Cards } from "../components/Cards";
import { CatPopUp } from "../components/CatPopUp";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hover } from "../components/Hover";
import { Icon } from "../components/Icon";
import { LanguageSwitch } from "../components/LanguageSwitch";
import ImageComponent from "../components/ImageComponent";
import { Section } from "../components/Section";
import awsImg from "../images/aws.svg";
import barrel from "../images/barrel.png";
import catBrit from "../images/cat-brit.png";
import catMex from "../images/cat-mexican.png";
import digitaloceanImg from "../images/digitalocean.png";
import expressImg from "../images/express.svg";
import gitImg from "../images/git.svg";
import gmailImg from "../images/gmail.svg";
import herokuImg from "../images/heroku.png";
import logo from "../images/letter.svg";
import linkedImg from "../images/linkedin.svg";
import mongoImg from "../images/mongo.svg";
import nodeImg from "../images/node.svg";
import programmerImg from "../images/programer.png";
import portfolioImg from "../images/portfolio.svg";
import whatsappImg from "../images/whatsapp.svg";
import reactImg from "../images/react.svg";
import rightImg from "../images/second-bg-md.jpg";

export const MainLanding = () => {
  const { t } = useTranslation();

  const [activeImg, setActiveImg] = useState(false);
  const [showCat, setShowCat] = useState(false);

  let cats = [
    { nationality: "en", img: catBrit },
    { nationality: "es", img: catMex },
  ];

  const options = [
    { label: "Landing 1", action: () => console.log("Landing 1") },
    { label: "Landing 2", action: () => console.log("Landing 2") },
    { label: "Landing 3", action: () => console.log("Landing 3") },
    { label: "Landing 4", action: () => console.log("Landing 4") },
  ];

  /*********************** 1st Section *****************************************/
  const leftContent1 = (
    <span className="main-landing__titles --text-center">
      <h1>{t("global.miN4me")}</h1>
      <p>{t("global.w3bD3v")}</p>
    </span>
  );

  const rightContent1 = (
    <span className="main-img-cont">
      <ImageComponent alt="phones" className="main-img" src={programmerImg} />
    </span>
  );

  /**
  const buttons = [
    {
      className: "--purple",
      action: () => console.log("Option 1"),
      label: "Option 1",
    },
    {
      className: "--purple",
      action: () => console.log("Option 2"),
      label: "Option 2",
    },
  ];
   */

  /*********************** 2nd Section *****************************************/
  const leftContent2 = (
    <span className="main-landing__titles">
      <p className="--text-magenta --uppercase --bold --mb-1 --font-90">
        {t("global.ab0ut")}
      </p>
      <h1>{t("global.intr0ducti0n")}</h1>
      <span className="line --line-50 --bg-magenta --mb-2"></span>
      <p className="--color-gray-darker">{t("global.ab0utFul1")}</p>
    </span>
  );

  /*********************** 3rd Section *****************************************/

  const mernCardsInfo = [
    {
      className: "--left",
      img: <ImageComponent alt="mongo" className="mongo-icon" src={mongoImg} />,
      text: "global.mong0exp",
      title: "MongoDB",
    },
    {
      img: (
        <ImageComponent
          alt="express"
          className="express-icon"
          src={expressImg}
        />
      ),
      text: "global.expr3ssExp",
      title: "Express",
    },
    {
      img: <ImageComponent alt="react" className="react-icon" src={reactImg} />,
      text: "global.re4ctExp",
      title: "React",
    },
    {
      img: <ImageComponent alt="node" className="node-icon" src={nodeImg} />,
      text: "global.n0deExp",
      title: "Node",
    },
  ];

  let stack = "MERN";
  const leftContent3 = (
    <>
      <span className="main-landing__titles">
        <p className="--text-magenta --uppercase --bold --mb-1 --font-90">
          {t("global.mito0ls")}
        </p>
        <h1>{t("global.m4inSt4ck")}</h1>
        <span className="line --line-50 --bg-magenta --mt-1"></span>
        <p className="--color-gray-darker --my-2 --bold">
          <Trans i18nKey="global.m4inXpl4in">
            <span className="--text-purple"></span>
            {{ stack }}
          </Trans>
        </p>
      </span>
      <Cards cards={mernCardsInfo} className="--four-colored  --bg-blue" />
    </>
  );

  /*********************** 4th Section *****************************************/

  const cardsInfo = [
    {
      img: <ImageComponent alt="aws" className="aws-icon" src={awsImg} />,
      text: "global.amaz0nExp",
      title: "Amazon Web Services",
    },
    {
      img: (
        <ImageComponent
          alt="digitalocean"
          className="digital-icon"
          src={digitaloceanImg}
        />
      ),
      text: "global.dig1talExp",
      title: "DigitalOcean",
    },
    {
      img: (
        <ImageComponent alt="heroku" className="heroku-icon" src={herokuImg} />
      ),
      text: "global.herokuExp",
      title: "Heroku",
    },
  ];

  const leftContent4 = (
    <>
      <span className="main-landing__titles">
        <p className="--text-magenta --uppercase --bold --mb-1 --font-90">
          {t("global.mito0ls")}
        </p>
        <h1>{t("global.D3pl0ym3nt")}</h1>
        <span className="line --line-50 --bg-magenta --mb-2"></span>
      </span>
      <Cards cards={cardsInfo} />
    </>
  );

  const rightContent4 = (
    <>
      <span className="img-right">
        <ImageComponent alt="right-img" className="right-img" src={rightImg} />,
      </span>
    </>
  );
  /*********************** Imgs 5th Section *****************************************/

  const iconsInfo = [
    {
      alt: "git-icon",
      icon: gitImg,
      link: "https://github.com/Jonathanmedhed",
    },
    {
      alt: "linked-icon",
      icon: linkedImg,
      link: "https://www.linkedin.com/in/jonathan-medina-heddrich-49164196/",
    },
    {
      alt: "portfolio-icon",
      icon: portfolioImg,
      link: "https://portfolio-v3-six-alpha.vercel.app/",
    },
    {
      alt: "whatsapp-icon",
      icon: whatsappImg,
      link: "https://wa.me/+584128364157",
      linkDesktop: "+1-407-516-3241",
    },
    {
      alt: "gmail-icon",
      icon: gmailImg,
      link: "mailto:jonathanmedinaheddrich@gmail.com",
      linkDesktop: "jonathanmedinaheddrich@gmail.com",
    },
  ];
  return (
    <div className="main-landing">
      <Header
        className={``}
        centerItem={
          <LanguageSwitch active={true} onClick={() => setShowCat(true)} />
        }
        icon={<ImageComponent alt="icon" className="letter-icon" src={logo} />}
        options={options}
        title={t("global.p0rtf0lio")}
      />
      <Section
        bgImgStyle="main-bg"
        //buttons={buttons}
        className="main-section"
        contentLeft={leftContent1}
        contentRight={rightContent1}
      />
      <Hover action={() => setShowCat(false)}>
        <CatPopUp
          box={barrel}
          cats={cats}
          className="main-cat"
          start={showCat}
        />
      </Hover>
      <Section
        className="second-section --bg-white-dark"
        contentLeft={leftContent2}
        contentRight={<div className="section-empty"></div>}
      />
      <Section className="colored-section --pt-2" contentLeft={leftContent3} />

      <div className="shaped --bg-white">
        <div className="shaped__content --bg-white-dark">
          <Section
            className="section__img-r --bg-white-dark"
            contentLeft={leftContent4}
            contentRight={rightContent4}
          />
        </div>
      </div>
      <div className="main-landing__titles no-section">
        <p className="--text-magenta --uppercase --bold --mb-1 --font-90">
          {t("global.m0reInf0")}
        </p>
        <h1 className="">{t("global.miL1nks")}</h1>
        <span className="line --line-50 --bg-magenta --my-1"></span>
      </div>
      <div className="main-landing__icons --pt-2">
        {iconsInfo.map((icon, i) => (
          <Icon
            alt={icon.alt}
            key={i}
            icon={icon.icon}
            index={i}
            isActive={activeImg === i}
            link={icon.link}
            linkDesktop={icon.linkDesktop}
            onClick={() => setActiveImg(activeImg === i ? false : i)}
          />
        ))}
      </div>
      <Footer className="--mt-5" />
    </div>
  );
};
