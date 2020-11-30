import React from "react"


function Wind({ windDeg, lang }) {

    let windConvert = () => {
        let wind = {}
        switch (lang) {
            case 'en':
                wind = {
                    n: 'N',
                    nne: 'NNE',
                    ne: 'NE',
                    ene: 'ENE',
                    e: 'E',
                    ese: 'ESE',
                    se: 'SE',
                    sse: 'SSE',
                    s: 'S',
                    ssw: 'SSW',
                    sw: 'SW',
                    wsw: 'WSW',
                    w: 'W',
                    wnw: 'WNW',
                    nw: 'NW',
                    nnw: 'NNW'
                }
                break
            case 'uk':
                wind = {
                    n: 'Пн',
                    nne: 'ПнПС',
                    ne: 'ПнС',
                    ene: 'СПнС',
                    e: 'С',
                    ese: 'СПдС',
                    se: 'ПдС',
                    sse: 'ПдПС',
                    s: 'Пд',
                    ssw: 'ПдПЗ',
                    sw: 'ПдЗ',
                    wsw: 'ЗПдЗ',
                    w: 'З',
                    wnw: 'ЗПнЗ',
                    nw: 'ПнЗ',
                    nnw: 'ПнПЗ'
                }
                break
            default:
                wind = {
                    n: 'С',
                    nne: 'ССВ',
                    ne: 'СВ',
                    ene: 'ВСВ',
                    e: 'В',
                    ese: 'ВЮВ',
                    se: 'ЮВ',
                    sse: 'ЮЮВ',
                    s: 'Ю',
                    ssw: 'ЮЮЗ',
                    sw: 'ЮЗ',
                    wsw: 'ЗЮЗ',
                    w: 'З',
                    wnw: 'ЗСЗ',
                    nw: 'СЗ',
                    nnw: 'ССЗ'
                }

        }
        if (windDeg > 12.5 && windDeg < 33) return wind.nne
        else if (windDeg > 33 && windDeg < 56) return wind.ne
        else if (windDeg > 56 && windDeg < 78) return wind.ene
        else if (windDeg > 78 && windDeg < 101) return wind.e
        else if (windDeg > 101 && windDeg < 123) return wind.ese
        else if (windDeg > 123 && windDeg < 146) return wind.se
        else if (windDeg > 146 && windDeg < 168) return wind.sse
        else if (windDeg > 168 && windDeg < 191) return wind.s
        else if (windDeg > 191 && windDeg < 213) return wind.ssw
        else if (windDeg > 213 && windDeg < 236) return wind.sw
        else if (windDeg > 236 && windDeg < 258) return wind.wsw
        else if (windDeg > 258 && windDeg < 281) return wind.w
        else if (windDeg > 281 && windDeg < 303) return wind.wnw
        else if (windDeg > 303 && windDeg < 326) return wind.nw
        else if (windDeg > 326 && windDeg < 348) return wind.nnw
        else return wind.n
    }

    return (
        <span>
            {windConvert()}
        </span >
    )
}


export default Wind