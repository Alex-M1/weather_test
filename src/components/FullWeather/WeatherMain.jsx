import React from 'react'
import Clock from './Clock'
import styles from '../../css/FullWeather.module.css'
function WeatherMain({ weather, localization, lang }) {
    return (
        <div className={styles.weather_main}>
            <h1 className={styles.city}>{weather.name}</h1>
            <Clock />
            <p className={styles.temp}>{Math.round(weather.main.temp)} C&deg;</p>
            <p className={styles.feels}>{localization.feels[lang]} {Math.round(weather.main.feels_like)} C&deg;</p>
        </div>
    )
}

export default WeatherMain