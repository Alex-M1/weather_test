import * as axios from 'axios'

const API_KEY = 'appid=13ac7d88669c79ec6489f16e1a24c793'

const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/`
})

export const weatherAPI = {
    getCurrentWeather(city, lang) {
        return instance.get(`weather?units=metric&q=${city}&${API_KEY}&lang=${lang}`)
            .then(responses => responses.data)
    },
    getCurrentWeatherfromId(id, lang) {
        return instance.get(`weather?units=metric&id=${id}&${API_KEY}&lang=${lang}`)
            .then(responses => responses.data)
    },
    getCurrentWeatherFromCoord(lat, lon, lang) {
        return instance.get(`weather?units=metric&lat=${lat}&lon=${lon}&${API_KEY}&lang=${lang}`)
            .then(responses => responses.data)
    },
    getForecastWeather(id, lang) {
        return instance.get(`forecast?units=metric&id=${id}&${API_KEY}&lang=${lang}`)
            .then(responses => responses.data)
    }

}