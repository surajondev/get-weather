import React from 'react';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <center>
          <p className="p-footer">
            © {currentYear} Made with <span role="img" aria-labelledby="love">❤️</span> by <a href="https://github.com/surajondev">Suraj Vishwakarma</a> 
          </p>
          <div className="github-info">
            <p className="p-footer">  Source <a href="https://openweathermap.org/">OpenWeather</a></p>
            <a href="https://github.com/surajondev" className='github'> <BsGithub /></a>
          </div>
        </center>
      </div>
    </footer>
  );
}

export default Footer;
