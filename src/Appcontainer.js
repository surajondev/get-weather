import React from 'react'
import './index.css'
import {WiHumidity} from 'react-icons/wi'

function Appcontainer(props) {
  return (
    <main className="container">
      <div className="row">
        <div className="container-medium main">
          <img
            alt={'Weather Condition and City'}
            src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${props.icon}.svg`}
            className="large-icon"
          ></img>
          <div className="text">
            <h1>
              {Math.round(props.temp - 273.15)}
              <sup>°</sup>C
            </h1>
            <h2>{props.city} </h2>
            <p>{props.desc}</p>
          </div>
        </div>
        <div className="container-small">
  <WiHumidity style={{ fontSize: '8em' }} /> {/* Adjust the '2em' value to change the size */}
  <center>
    <p>Humidity</p>
    <h1>{props.humidity}%</h1>
  </center>
</div>

      </div>
      <div className="row">
        <div className="container-small">
          <img
            alt={'Air Pressure'}
            src="https://img.icons8.com/ios/452/pressure.png"
            className="medium-icon"
          ></img>
          <center>
            <p>Pressure</p>
            <h1>{props.pressure} pascal</h1>
          </center>
        </div>
        <div className="container-small">
          <img
            alt={'Wind Speed'}
            src="https://img.icons8.com/ios/452/wind.png"
            className="medium-icon"
          ></img>
          <center>
            <p>Wind Speed</p>
            <h1>{props.wind} km/h</h1>
          </center>
        </div>
        <div className="container-small">
          <img
            alt={'Visibility Range'}
            src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_visibility_48px-512.png"
            className="medium-icon"
          ></img>
          <center>
            <p>Visibility</p>
            <h1>{props.visibility} meters</h1>
          </center>
        </div>
      </div>
    </main>
  )
}

export default Appcontainer
