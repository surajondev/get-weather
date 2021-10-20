import React from "react"
import "./index.css"

function Appcontainer(props){
    return(
        <main className="container">
            <div className="row">
                <div className="container-medium main">
                    <img alt={"Weather Condition and City"} src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${props.icon}.svg`}></img>
                    <div>
                        <h1 align="right">{Math.round(props.temp-273.15)}<sup>0</sup>C</h1>
                        <h2 align="right">{props.city} </h2>
                        <p align="right">{props.desc}</p>
                    </div>
                </div>
                <div className="container-small">
                    <center>
                        <img alt={"Humidity"} src="https://image.flaticon.com/icons/png/512/219/219816.png"></img>
                        <p>Humidity</p>
                        <h1>{props.humidity}%</h1>
                    </center>
                </div>
            </div>
            <div className="row">
            <div className="container-small">
                    <center>
                        <img alt={"Air Pressure"} src="https://img.icons8.com/ios/452/pressure.png"></img>
                        <p>Pressure</p>
                        <h1>{props.pressure} pascal</h1>
                    </center>
                </div>
                <div className="container-small">
                    <center>
                        <img alt={"Wind Speed"} src="https://img.icons8.com/ios/452/wind.png"></img>
                        <p>Wind Speed</p>
                        <h1>{props.wind} km/h</h1>
                    </center>
                </div>
                <div className="container-small">
                    <center>
                        <img alt={"Visibility Range"} src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_visibility_48px-512.png"></img>
                        <p>Visibility</p>
                        <h1>{props.visibility} meters</h1>
                    </center>
                </div>
            </div>
        </main>
    )
}

export default Appcontainer