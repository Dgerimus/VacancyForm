import React from "react";
import "./Header.css";
import Ellipse from "./icons/Ellipse.png";

const Header = ({ onButtonClick, activeButton }) => {
  const handleButtonClick = (buttonType) => {
    onButtonClick(buttonType);
    // onButtonClick(buttonType);
  };

  return (
    <header className="header">
      <img src={Ellipse} alt="Иконка" className="circle-icon" />

      <div className="button-group">
        <button
          className={`header-button ${activeButton === "list" ? "active" : ""}`}
          onClick={() => handleButtonClick("list")}
        >
          <span>Список вакансий</span>
        </button>
        <button
          className={`header-button ${activeButton === "form" ? "active" : ""}`}
          onClick={() => handleButtonClick("form")}
        >
          <span>Добавить вакансию</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
