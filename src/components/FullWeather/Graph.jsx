import React from 'react'
import styles from '../../css/FullWeather.module.css'


export default function Graph({ margin, bg, data }) {
    let temp = Math.round(data.main.temp)
    let myDate = new Date(data.dt * 1000)
    let time = (date) => {
        let hours = date.getHours()
        let minutes = date.getMinutes()
        if (minutes < 10) minutes = `0${minutes}`
        if (hours < 10) hours = `0${hours}`
        return `${hours} : ${minutes}`
    }
    return (
        <div className={styles.forecastItem}>
            <div className={styles.forecastItem__date}>
                <p >{time(myDate)}</p>
            </div>
            <img
                className={styles.forecastItem__img}
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
            />
            <div className={styles.forecastItem__temp} style={{ marginTop: margin, background: bg }}>{temp}</div>
        </div>
    )
}