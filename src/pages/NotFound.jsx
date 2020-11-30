import { Container } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

function NotFound({ lang, localization }) {
    return (
        <Container maxWidth='md'>
            <div style={{ marginTop: 80, textAlign: 'center', }}>
                <h1>Error 404 | Page not found</h1>
                <p><NavLink to='/'>{localization.toMain[lang]}</NavLink></p>
            </div>
        </Container>
    )
}

const mapStateToProps = state => ({
    lang: state.lang.lang,
    localization: state.lang.localization,
})
export default connect(mapStateToProps)(NotFound)