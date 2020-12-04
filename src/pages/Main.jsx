import { Container } from '@material-ui/core'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import WeatherCard from '../components/Main/WeatherCard'
import styles from '../css/Main.module.css'
import { setCurrentWeather, setPath } from '../reducers/weather-reducer'
import { getWeatherFromCoord, getWeatherFromId } from '../thunks/weather'


function Main(props) {
    let card =
        <div className={styles.weatherCard__block}>
            {props.currentWeather.map(el => {
                return <WeatherCard
                    currentWeather={el}
                    key={el.id}
                    getWeatherFromId={props.getWeatherFromId}
                    isRefresh={props.isRefresh}
                    refreshId={props.refreshId}
                    setCurrentWeather={props.setCurrentWeather}
                    setPath={props.setPath}
                    lang={props.lang}
                />
            })}
        </div>

    if (localStorage.length === 0) {
        let geo = navigator.geolocation
        geo.getCurrentPosition(position => {
            props.getWeatherFromCoord(position.coords.latitude, position.coords.longitude, props.lang);
        })
    }
    useEffect(() => {
        props.currentWeather.map(el => {
            props.getWeatherFromId(el.id, props.lang)
        })
    }, [props.lang])

    return (
        <div style={{ margin: '66px 0 60px 0' }}>
            <Container maxWidth='md'>
                {card}
            </Container>
        </div >

    )
}


const mapStateToProps = (state) => ({
    currentWeather: state.currentWeather.currentData,
    lang: state.lang.lang,
    city: state.currentWeather.city,
    isRefresh: state.currentWeather.refresh,
    refreshId: state.currentWeather.refreshId,
})

export default connect(mapStateToProps, {
    getWeatherFromCoord, getWeatherFromId, setCurrentWeather, setPath
})(withRouter(Main))