import React, {useEffect, useState} from 'react';
import axios from 'axios';

const CityWeather = (props) => {

  const [icon, setIcon] =useState("")
  const [temp, setTemp] = useState("")

  useEffect(() => {
    getWeather()
   
  }, [props.cityName])


// class CityWeather extends Component {


    // state = {}

    // async componentDidMount(){
    //     this.getWeather();
    // }

    // componentDidUpdate(oldProps){
    //     if(oldProps.cityName !== this.props.cityName){
    //         this.getWeather();
    //     }
    // }

    const getWeather = async()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        const resp = await axios.get(url);
        console.log(resp.data);
        // console.log(resp.data.weather[0].icon)

        setIcon(resp.data.weather[0].icon)
        setTemp(resp.data.main.temp)
    }
    
   
    const iconUrl = `http://openweathermap.org/img/w/${icon}.png`
    // render(){
        return(
          <>
            <h1>{props.cityName}</h1>
            <p>{temp} C</p>
            <img src={iconUrl} alt="icon"/>
            
          </>
        )
    // }
}

export default CityWeather;