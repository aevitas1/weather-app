import axios from 'axios'
import { useState, useEffect } from 'react'

function Forecast() {
    const WEATHERMAP_TOKEN = process.env.REACT_APP_WEATHERMAP_TOKEN
    const WEATHERMAP_URL = process.env.REACT_APP_WEATHERMAP_URL

    // enable when everything works **************************
    // const [latitude, setLatitude] = useState(0)
    // const [longitude, setLongitude] = useState(0)
    const [weather, setWeather] = useState('')
    const [temperature, setTemperature] = useState(0)
    const [city, setCity] = useState('')


    // enable when everything works **************************
    // const savePositionToState = (position) => {
    //     setLatitude(position.coords.latitude);
    //     setLongitude(position.coords.longitude)
    // }
    const fetchWeather = async () => {
        try {
    // enable when everything works **************************
            // await window.navigator.geolocation.getCurrentPosition(savePositionToState)
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=52.377956&lon=4.897070&units=metric&lang=en&appid=${WEATHERMAP_TOKEN}`
            );
    // enable when everything works **************************
                            // `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=en&appid=${WEATHERMAP_TOKEN}`
            setTemperature(res.data.current.temp)
            setCity(res.data.timezone)
            setWeather(res.data.current.weather[0].main)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchWeather();
    }, [])
    return (
        <div className='weather-disp'>
            <div className="weather__container">
                <h1>{city}</h1>
                <h2>{temperature}</h2>
                <h3>{weather}</h3>
            </div>
        </div>
    )
}

export default Forecast
