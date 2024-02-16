import logo from './logo.svg';
import './App.css';
import React  from 'react';
import WeatherData from './component/WeatherData';
import axios from 'axios';

const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=18.5204&lon=73.8567&units=metric&appid=90717e416faf8e4864543bdd4471cac4";

const App = () => {
  const[isLoading, setLoading] = React.useState(true);
  const[weatherData, setWeatherData] = React.useState([]);

  React.useEffect(()=>{
    axios.get(apiURL).then(
      (response)=> {
        setWeatherData(response.data);
        setLoading(false);
      })
  },[])
  if (isLoading) {
    return(
      <div className="App">
        Loading...
      </div>
    )
  }

  return(
    <div className="App">
      <WeatherData weatherData={weatherData}/>
    </div>
  )
}

export default App;
