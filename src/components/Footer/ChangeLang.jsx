import React from 'react'
import styles from '../../css/Footer.module.css'


export default function ChangeLang({ changeLang, languages, lang }) {

    return (
        <div className={styles.footer__lang}>
            {languages.map(el => {
                if (lang === el.code) return <option className={styles.footer__lang_item} value={el.code} onClick={changeLang} style={{ borderBottom: '1px solid black' }} key={el.name}>{el.name}</option>
                return <option className={styles.footer__lang_item} value={el.code} onClick={changeLang} style={{ borderBottom: 'none' }} key={el.name}>{el.name}</option>
            })}
        </div>
    )
}