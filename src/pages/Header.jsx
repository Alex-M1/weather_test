import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { Container, AppBar, Typography, Toolbar } from '@material-ui/core'
import AddCity from '../components/Header/AddCity'
import { addCity } from '../thunks/weather'
import { NavLink } from 'react-router-dom'
import { setPath } from '../reducers/weather-reducer'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}))

function Header(props) {
    const classes = useStyles()
    const changePath = () => props.setPath('/')
    return (
        <header className={classes.root}>
            <AppBar position="fixed" >
                <Container maxWidth='md'>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <NavLink to='/' style={{ textDecoration: 'none', color: 'inherit' }} onClick={changePath}>
                                UselessWeather
                            </NavLink>
                        </Typography>
                        <AddCity addCity={props.addCity} path={props.path} lang={props.lang} />
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    )
}

const mapStateToProps = state => ({
    path: state.currentWeather.path,
    lang: state.lang.lang
})
export default connect(mapStateToProps, { addCity, setPath })(Header)