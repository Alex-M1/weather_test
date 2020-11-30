import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../css/Main.module.css'

function CardContent({ changePath, weather }) {
    return (
        <NavLink
            to={`/city_${weather.id}`}
            style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
            onClick={changePath}
        >
            <p className={styles.city}>{weather.name}</p>
            <p className={styles.temp}>{Math.round(weather.main.temp)} C&deg;</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather" />
            <p className={styles.weatherDescription}>{weather.weather[0].description}</p>
        </NavLink>
    )
}

export default CardContent