import { Container, Divider } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import ChangeLang from '../components/Footer/ChangeLang'
import Share from '../components/Footer/Share'
import styles from '../css/Footer.module.css'
import { setLang } from '../reducers/lang-reducer'

function Footer(props) {
    const changeLang = e => props.setLang(e.target.value)

    return (
        <footer>
            <Container maxWidth='md'>
                <Divider />
                <div className={styles.footer}>
                    <p className={styles.footer__copy}>{props.localization.copy[props.lang]} &copy;2020</p>
                    <ChangeLang
                        changeLang={changeLang}
                        languages={props.languages}
                        lang={props.lang}
                    />

                    <Share
                        lang={props.lang}
                        localization={props.localization}
                    />
                </div>
            </Container>
        </footer>
    )
}

const mapStateToProps = state => ({
    lang: state.lang.lang,
    localization: state.lang.localization,
    languages: state.lang.languages
})
export default connect(mapStateToProps, { setLang })(Footer)