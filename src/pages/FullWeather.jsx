import { Container } from '@material-ui/core'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getForecast, getWeatherFromId } from '../thunks/weather'
import FullWeatherMain from '../components/FullWeather/FullWeatherMain'
import Forecast from '../components/FullWeather/Forecast'
import { tempBg } from '../assets/tempbg'
import { withRouter } from 'react-router'


function FullWeather(props) {
    let path = props.match.params.id,
        weather

    useEffect(() => {
        props.getWeatherFromId(path, props.lang)
        props.getForecast(path, props.lang)
    }, [])
    useEffect(() => props.getWeatherFromId(path, props.lang), [props.lang])
    props.currentWeather.map(el => {
        if (el.id === +path) return weather = el
        return
    })
    return (
        <div style={{ margin: '66px 0 60px 0' }}>
            <Container maxWidth='md'>
                <FullWeatherMain weather={weather} lang={props.lang} localization={props.localization} />
                <Forecast forecast={props.forecast} tempBg={tempBg} />
            </Container>
        </div>

    )
}

const mapStateToProps = state => ({
    currentWeather: state.currentWeather.currentData,
    lang: state.lang.lang,
    forecast: state.forecast.forecast,
    localization: state.lang.localization
})

export default connect(mapStateToProps, {
    getWeatherFromId, getForecast
})(withRouter(FullWeather))