import React from "react";
import "./index.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <center>
          
          <p className="p-footer">Source <a href="https://openweathermap.org/">OpenWeather</a></p>
          <p  className='footer1' id="copyright">© {year} MADE WITH ❤️ BY SURAJ VISHWAKARMA</p>
        </center>
      </div>
    </footer>
  );
}

export default Footer;
