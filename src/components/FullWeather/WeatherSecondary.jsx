import React from 'react'
import styles from '../../css/FullWeather.module.css'


function WeatherSecondary({ weather }) {
    return (
        <div className={styles.weather_secondary}>
            <img
                className={styles.weatherImg}
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
            />
            <p className={styles.description}>{weather.weather[0].description}</p>
        </div>
    )
}

export default WeatherSecondary