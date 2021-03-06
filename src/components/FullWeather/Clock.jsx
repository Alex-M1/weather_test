import React, { Component } from "react"
import styles from '../../css/FullWeather.module.css'
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            time: new Date().toLocaleString(),
        });
    }
    render() {
        return <p className={styles.clock}>{this.state.time}.</p>;
    }
}

export default Clock