import React from "react"
import "./index.css"

function Footer(){
    return(
        <footer>
            <div className="container">
                <center>
                    <p className="p-footer">Made with <span role="img" aria-labelledby="love">❤️</span> by <a href="https://github.com/surajondev">Suraj Vishwakarma</a></p>
                    <p className="p-footer">Source <a href="https://openweathermap.org/">OpenWeather</a></p>
                </center>
            </div>
        </footer>
    )
}

export default Footer

