import React from "react";
import Appcontainer from "./Appcontainer.js";
import "./index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city_name: "london",
      error: false,
      toast_message: "",
      temp: [],
      city: [],
      icon: [],
      desc: [],
      humidity: [],
      pressure: [],
      wind: [],
      visibility: [],
      displayLoader: "none",
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.city = this.city.bind(this);
    this.submit = this.submit.bind(this);
    this.closeToasterMessage = this.closeToasterMessage.bind(this);
  }

  async componentDidMount() {
    try {
      const position = await this.getCurrentPosition();
      const { latitude, longitude } = position.coords;

      const reverseGeocodeRes = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${process.env.REACT_APP_OPEN_WEATHER_SECRET}`
      );
      const reverseGeocodeData = await reverseGeocodeRes.json();
      const cityName = reverseGeocodeData[0]?.name || "london";



      this.setState({
        city_name: cityName,
      });

      // Now fetch weather data based on the user's location
      this.fetchWeatherData(cityName);
    } catch (error) {
      console.error("Error getting location or weather data:", error);
      this.setState({
        error: true,
        toast_message: "Error fetching location or weather data.",
      });
    }
  }

  getCurrentPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  async fetchWeatherData(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_SECRET}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.status);
      }
      const responseData = await response.json();

      this.setState({
        temp: responseData.main.temp,
        city: responseData.name,
        icon: responseData.weather[0].icon,
        desc: responseData.weather[0].description,
        humidity: responseData.main.humidity,
        pressure: responseData.main.pressure,
        wind: responseData.wind.speed,
        visibility: responseData.visibility,
        error: false,
        toast_message: "",
      });
    } catch (error) {
      if (error.message === "404") {
        this.setState({
          error: true,
          toast_message:
            "The location entered is invalid. Please enter a valid location.",
        });
        toast("The location entered is invalid", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
          className: 'toast-message'
        });
      }
    }
  }

  city(event) {
    this.setState({
      city_name: event.target.value,
    });
  }

  closeToasterMessage() {
    // Set error status back to false
    this.setState((prevState) => {
      return {
        ...prevState,
        error: false,
        toast_message: "",
      };
    });
  }

  submit(e) {
    e.preventDefault();
    this.componentWillMount();
  }

  componentWillMount() {
    document.body.style.filter = "blur(0px)";
    // Show loader
    this.setState({ displayLoader: "block" });
    const city = this.state.city_name;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_SECRET}`;
    fetch(url)
      .then((response) => {
        // Hide Loader when get the response
        this.setState({ displayLoader: "none" });
        // Check if the response was successful
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .then((response) =>
        this.setState({
          temp: response.main.temp,
          city: response.name,
          icon: response.weather[0].icon,
          desc: response.weather[0].description,
          humidity: response.main.humidity,
          pressure: response.main.pressure,
          wind: response.wind.speed,
          visibility: response.visibility,
          error: false,
          toast_message: "",
        })
      )
      .catch((error) => {
        // Handle 404 error. Render toast message indicating location is invalid
        if (error.message === "404") {
          this.setState((prevState) => {
            return {
              ...prevState,
              error: true,
              toast_message:
                "The location entered is invalid. Please enter valid location.",
            };
          });
          toast("The location entered is invalid", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
            className: 'toast-message'
          });
        }
      });
  }
  render() {
    return (
      <div>
        <div className="blur-wall"></div>
        <div
          className="loader"
          style={{ display: this.state.displayLoader }}
        ></div>
        <form className="container form">
          <input
            className="input-box"
            name="t1"
            type="text"
            onChange={this.city}
            placeholder="Enter desired location"
          ></input>
          <button className="submit-button" onClick={this.submit}>
            <p className="p-submit">SUBMIT</p>
          </button>
        </form>
        <Appcontainer
          temp={this.state.temp}
          city={this.state.city}
          icon={this.state.icon}
          desc={this.state.desc}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          wind={this.state.wind}
          visibility={this.state.visibility}
        />
        {this.state.error && (
          <ToastContainer />
        )}
      </div>
    );
  }
}
export default App;
