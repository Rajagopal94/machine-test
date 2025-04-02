import React, { useState } from "react";
import "../styles/header.css";

const Header = ({ handleRegionFilter }) => {
  const [activeRegion, setActiveRegion] = useState("all");

  const handleButtonClick = (region) => {
    setActiveRegion(region);
    handleRegionFilter(region);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Countries</h1>
      </div>
      <div className="filters">
        <button
          onClick={() => handleButtonClick("all")}
          className={activeRegion === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => handleButtonClick("Asia")}
          className={activeRegion === "Asia" ? "active" : ""}
        >
          Asia
        </button>
        <button
          onClick={() => handleButtonClick("Europe")}
          className={activeRegion === "Europe" ? "active" : ""}
        >
          Europe
        </button>
      </div>
    </header>
  );
};

export default Header;
