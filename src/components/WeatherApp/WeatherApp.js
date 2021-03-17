import React, { Component, useState } from 'react';
import CityWeather from './CityWeather';

const WeatherApp = () => {
  const [city, setCity] = useState('London')
  const [cityNameForWeather, setCityNameForWeather] = useState('London')

  const changeCity = (e) => {
    setCity(e.target.value)
  }

  const citysearch = (e) => {
    e.preventDefault();
    setCityNameForWeather(city)
  }

  return (
    <div className="container">
      <CityWeather cityName={cityNameForWeather} />
      <div className="row justify-content-center">
        <form onSubmit={citysearch}>
          <input type="text" value={city} onChange={changeCity} />
          <input type="submit" className="btn btn-primary" value="Search!" />
        </form>
        
      </div>
    </div>
  )
}

// class WeatherApp extends Component {
//     state = {
//         city: "London",
//         cityNameForWeather: "London",
//     }

//     changeCity = (e)=>{
//         this.setState({city:e.target.value})
//         // console.log(e.target.value)
//     }

//     citysearch = (e)=>{
//         e.preventDefault();
//         this.setState({cityNameForWeather: this.state.city})
//     }

//     render(){
//         return(
//             <div className="container">
//                 <CityWeather cityName={this.state.cityNameForWeather} />
//                 <div className="row justify-content-center">
//                     <form onSubmit={this.citysearch}>
//                         <input type="text" value={this.state.city} onChange={this.changeCity} />
//                         <input type="submit" className="btn btn-primary" value="Search!" />
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

export default WeatherApp;