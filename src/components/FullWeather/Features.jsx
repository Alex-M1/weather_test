import React from 'react';
import Wind from './Wind'
import styles from '../../css/FullWeather.module.css'
function Features({ weather, lang, localization }) {
    return (
        <div className={styles.features}>
            <div className={styles.features_left}>
                <p>{localization.humidity[lang]}: {weather.main.humidity}%</p>
                <p>{localization.pressure[lang]}: {Math.round((weather.main.pressure) * 0.7518)}мм рт.ст</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.features_right}>
                <p>{localization.windSpeed[lang]}: {weather.wind.speed} м/с</p>
                <p>{localization.windDirection[lang]}: <Wind windDeg={weather.wind.deg} lang={lang} /> </p>
            </div>
        </div>
    );
}

export default Features;