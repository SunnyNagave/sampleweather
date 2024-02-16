const WeatherData = (props) => {
    console.log(props.weatherData);
    return(
        <>
        <h1>Pune weather</h1>
         <hr/>
         <div className='weatherData'>
              <div className='weatherPoints'>
                <b>Latitude :</b> {props.weatherData.coord.lat}
              </div>
              <div className='weatherPoints'>
                <b>Longitude :</b> {props.weatherData.coord.lon} 
              </div>
              <div className='weatherPoints'>
                <b>Main Weather :</b> {props.weatherData.coord.lon}
              </div>
              <div className='weatherPoints'>
                <b>Weather Description :</b> {props.weatherData.coord.lon}
              </div>
              <div className='weatherPoints'>
                <b>Current Temperature :</b> {props.weatherData.main.temp} Degrees Celcius
              </div>
              <div className='weatherPoints'>
                <b>Minimum Temperature :</b> {props.weatherData.main.temp_min} Degrees Celcius
              </div>
              <div className='weatherPoints'>
                <b>Maximum Temperature :</b> {props.weatherData.main.temp_max} Degrees Celcius
              </div>
              <div className='weatherPoints'>
                <b>Humidity :</b> {props.weatherData.main.humidity} %
              </div>
              <div className='weatherPoints'>
                <b>Wind Speed :</b> {props.weatherData.wind.speed} m/s
              </div>
         </div>
        </>
    )
}

export default WeatherData