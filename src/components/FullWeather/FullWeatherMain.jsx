import React from 'react'
import Features from './Features'
import WeatherMain from './WeatherMain'
import WeatherSecondary from './WeatherSecondary'


export default function FullWeatherMain({ weather, lang, localization }) {
    return (
        <>
            <WeatherMain
                weather={weather}
                lang={lang}
                localization={localization}
            />
            <WeatherSecondary weather={weather} />
            <Features
                weather={weather}
                lang={lang}
                localization={localization}
            />
        </>
    )


}