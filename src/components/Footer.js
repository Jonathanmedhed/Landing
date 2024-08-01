import React from "react";

export const Footer = ({ className }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`${className ? className : ""}`}>
      <div className="footer">
        <span className="footer__content">
          <p>Jonathan Medina &copy; {currentYear}</p>
        </span>
      </div>
    </footer>
  );
};
