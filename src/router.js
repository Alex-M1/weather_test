
import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './pages/Footer'
import FullWeather from './pages/FullWeather'
import Header from './pages/Header'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import { setPath } from './reducers/weather-reducer'

const AppRouter = props => {
    const changeParh = () => props.setPath(window.location.pathname)
    return (
        <div onMouseMove={changeParh} onTouchStart={changeParh} style={{ height: '100%' }}>
            <Router >
                <Header />
                <Switch>
                    <Route exact path='/' component={Main} />
                    {props.currentWeather.map(el => <Route path={`/city_${el.id}`} component={FullWeather} key={el.id} />)}
                    <Route other component={NotFound} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}


const mapStateToProps = state => ({
    currentWeather: state.currentWeather.currentData,
})

export default connect(mapStateToProps, { setPath })(AppRouter)