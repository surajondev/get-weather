import React from "react";
import "./index.css";

function Header() {
  return (
    <header>
      <div className="container ui block header">
        <h1 className="tittle">GET WEATHER <span role="img" aria-labelledby="weather">💨</span></h1>
      </div>
    </header>
  );
}

export default Header;
