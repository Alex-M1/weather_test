const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER',
    IS_REFRESH = 'IS_REFRESH',
    SET_PATH = 'SET_PATH'


const initialState = {
    currentData: Object.keys(localStorage).map(el => {
        if (el.substring(0, 1) === 'c') return JSON.parse(localStorage.getItem(el))
        return false
    }),
    lang: 'ru',
    refresh: false,
    refreshId: '',
    path: window.location.pathname
}

const currentWeather = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_WEATHER:
            return {
                ...state,
                currentData: Object.keys(localStorage).map(el => {
                    if (el.substring(0, 1) === 'c') return JSON.parse(localStorage.getItem(el))
                    return false
                }),
            }
        case IS_REFRESH:
            return {
                ...state,
                refresh: action.refresh,
                refreshId: action.id
            }
        case SET_PATH:
            return {
                ...state,
                path: action.path
            }
        default:
            return state
    }
}
export default currentWeather

export const setCurrentWeather = () => ({ type: SET_CURRENT_WEATHER })
export const setRefresh = (refresh, id) => ({ type: IS_REFRESH, refresh, id })
export const setPath = path => ({ type: SET_PATH, path })
