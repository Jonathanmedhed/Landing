import React from "react";
/**
 * @param {string} className style class for whole section
 * @param {array} buttons array of buttons - button={className, action, label}
 * @param {string} bgImgStyle className for img to use on css
 * @param {object} contentLeft content for left side, not includen buttons contentLeft=<>content here</>;
 * @param {object} contentRight content for right side, contentRight=<>content here</>;
 * @param {boolean} isReversed on true reverse left and right on desktop;
 */
export const Section = ({
  className,
  buttons,
  bgImgStyle,
  contentLeft,
  contentRight,
  isReversed,
}) => {
  return (
    <div className={`section ${className ? className : ""}`}>
      {bgImgStyle && (
        <div className={`section__img ${bgImgStyle ? bgImgStyle : ""}`} />
      )}
      <div className={`section__content ${isReversed ? "--reversed" : ""}`}>
        <div className="section__left">
          {contentLeft && contentLeft}
          {buttons && (
            <div className="section__buttons">
              {buttons?.map((button, i) => {
                const btnClassName = button.className ? button.className : "";
                const btnAction = button.action
                  ? button.action
                  : () => console.log(`no action assigned for button ${i + 1}`);
                const btnLabel = button.label ? button.label : "no label";

                return (
                  <span
                    className={`btn ${btnClassName} section__button`}
                    key={i}
                    onClick={btnAction}
                    onKeyDown={btnAction}
                  >
                    {btnLabel}
                  </span>
                );
              })}
            </div>
          )}
        </div>
        {contentRight && <div className="section__right">{contentRight}</div>}
      </div>
    </div>
  );
};
