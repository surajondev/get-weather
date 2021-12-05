import React from "react";
import Appcontainer from "./Appcontainer.js"
import "./index.css"

class App extends React.Component {
  constructor(){
      super()
      {
          this.state = {
              cityName : "london",
              temp : [],
              city : [],
              icon : [],
              desc : [],
              humidity : [],
              pressure : [],
              wind : [],
              visibility : []

          }
      }
      this.city=this.city.bind(this)
      this.submit=this.submit.bind(this)
      this.fetchCityData = this.fetchCityData.bind(this);
  }
  

  city(event){
      const {value} = event.target;
      this.setState({
          city_name : value
      }
      )
  }

submit(e){
    e.preventDefault();
    fetchCityData(this.state.cityName);
}
  
  fetchCityData(cityName){
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0861a5029ae242c98d1f8edcbf54215c`
      fetch(url)
      .then(response => response.json())
      .then(response => (
          this.setState(
              {
                  temp : response.main.temp,
                  city : response.name,
                  icon : response.weather[0].icon,
                  desc : response.weather[0].description,
                  humidity : response.main.humidity,
                  pressure : response.main.pressure,
                  wind : response.wind.speed,
                  visibility : response.visibility
              }
          )
      ))
  }
  render(){
    return(
        <div>
            <div className="container form">
            <input className="input-box" name="t1" type="text" onChange={this.city}></input>
            <button className="submit-button" onClick={this.submit}><p className="p-submit">SUBMIT</p></button>
            </div>
            <Appcontainer 
            temp = {this.state.temp}
            city = {this.state.city}   
            icon = {this.state.icon} 
            desc = {this.state.desc}
            humidity = {this.state.humidity}
            pressure = {this.state.pressure}
            wind = {this.state.wind}
            visibility = {this.state.visibility}
            />
        </div>
        )
    }
}
export default App