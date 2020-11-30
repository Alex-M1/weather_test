import forecast from "./reducers/forecast-reducer"
import currentWeather from "./reducers/weather-reducer"
import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import lang from "./reducers/lang-reducer"

const reducers = combineReducers({
    currentWeather: currentWeather,
    forecast: forecast,
    lang: lang
})

export const store = createStore(reducers, applyMiddleware(thunk))

