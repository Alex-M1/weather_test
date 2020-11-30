import localization from '../assets/localization.json'
import languages from '../assets/languages.json'

const SET_LANG = 'SET_LANG'



const initialState = {
    lang: 'ru',
    localization,
    languages
}

const lang = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANG:
            return {
                ...state,
                lang: action.lang
            }
        default:
            return state
    }
}
export default lang

export const setLang = (lang) => ({ type: SET_LANG, lang })
