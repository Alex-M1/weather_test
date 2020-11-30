const SET_FORECAST = 'SET_FORECAST'

let obj = []
let arr = {
    main: {},
    weather: [{}],
    wind: {},
    clouds: [{}],
}
for (let i = 0; i < 40; i++) {
    obj.push(arr)
}

const initialState = {
    forecast: {
        city: {},
        list: obj
    }

}

const forecast = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORECAST:
            return {
                ...state,
                forecast: action.data
            }
        default:
            return state
    }
}
export default forecast

export const setForecast = (data) => ({ type: SET_FORECAST, data })


