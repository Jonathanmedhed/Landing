import React, { useState } from "react";
import ImageComponent from "./ImageComponent";
import { LanguageSwitch } from "./LanguageSwitch";
import menuIcon from "../images/menu.svg";

export const Header = ({
  action,
  className,
  centerItem,
  icon,
  options,
  title,
}) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  let menu = options && (
    <span className="header__menu">
      {options.map((option, i) => (
        <span
          className="header__option"
          key={i}
          onClick={() => option?.action}
          onKeyDown={() => option?.action}
          tabIndex={i}
        >
          {option.label}
        </span>
      ))}
    </span>
  );
  return (
    <header className={`header ${className ? className : ""}`}>
      <div className="header__inner">
        <div className="header__left">
          {icon && <span className="header-icon">{icon}</span>}
          {title && <span className="header-title">{title}</span>}
        </div>
        <span className={`header__switch ${isShowMenu ? "--hide" : ""}`}>
          {centerItem}
        </span>
        <div className="">
          {menu ? (
            menu
          ) : (
            <LanguageSwitch active={true} onClick={() => action()} />
          )}
        </div>
        {menu && (
          <span
            className="header__md"
            onClick={() => setIsShowMenu(!isShowMenu)}
            onKeyDown={() => setIsShowMenu(!isShowMenu)}
            tabIndex={0}
          >
            <ImageComponent alt="menu" className="menu-icon" src={menuIcon} />
          </span>
        )}
      </div>
      {/**isShowMenu && (
        <span className={`header__menu-drop ${isShowMenu ? "--active" : ""}`}>
          {isShowMenu &&
            options.map((option, i) => (
              <span
                className="header__option-drop"
                key={i}
                onClick={() => option?.action}
                onKeyDown={() => option?.action}
                tabIndex={i}
              >
                {option.label}
              </span>
            ))}
        </span>
      )*/}
    </header>
  );
};
