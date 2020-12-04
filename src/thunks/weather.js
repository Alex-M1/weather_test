import { setForecast } from "../reducers/forecast-reducer"
const { weatherAPI } = require("../axios/weatherAPI")
const { setCurrentWeather, setRefresh } = require("../reducers/weather-reducer")


export const getWeatherFromId = (id, lang) => dispatch => {
    dispatch(setRefresh(true, id))
    weatherAPI.getCurrentWeatherfromId(id, lang)
        .then(data => {
            localStorage.setItem(`city/${data.id}`, JSON.stringify(data))
            dispatch(setCurrentWeather())
            dispatch(setRefresh(false, id))
        })

}
export const getWeatherFromCoord = (lat, lon, lang) => dispatch => {

    weatherAPI.getCurrentWeatherFromCoord(lat, lon, lang)
        .then(data => localStorage.setItem(`city/${data.id}`, JSON.stringify(data)))
    dispatch(setCurrentWeather())

}
export const addCity = (city, lang) => dispatch => {
    weatherAPI.getCurrentWeather(city, lang)
        .then(data => {
            localStorage.setItem(`city/${data.id}`, JSON.stringify(data))
            dispatch(setCurrentWeather())
        })
}

export const getForecast = (id, lang) => dispatch => {
    weatherAPI.getForecastWeather(id, lang)
        .then(data => dispatch(setForecast(data)))

}