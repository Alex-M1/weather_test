import React from 'react'
import styles from '../../css/Main.module.css'
import Refresh from './Refresh'
import DeleteCity from './DeleteCity'
import CardContent from './CardContent'

export default function WeatherCard(props) {
    let weather = props.currentWeather
    const deleteCity = () => {
        localStorage.removeItem(`city/${weather.id}`)
        props.setCurrentWeather()
    }
    const changePath = () => props.setPath(`/city/${weather.id}`)
    return (
        <div className={styles.weatherCard}  >
            <DeleteCity deleteCity={deleteCity} />
            <CardContent
                changePath={changePath}
                weather={weather}
            />
            <Refresh
                lang={props.lang}
                id={weather.id}
                refresh={props.getWeatherFromId}
                isRefresh={props.isRefresh}
                refreshId={props.refreshId}
            />
        </div >
    )
}