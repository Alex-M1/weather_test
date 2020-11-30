import React from 'react'
import Graph from './Graph'

export default function Forecast(props) {
    let temp = []
    props.forecast.list.map((el, i) => {
        if (i < 8 && el.main.temp !== undefined) return temp.push(Math.round(el.main.temp))
    })
    let tempMax = Math.max.apply(null, temp)

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {temp.map((el, i) => {
                if (el === tempMax) return <Graph
                    margin={0}
                    bg={props.tempBg(el)}
                    data={props.forecast.list[i]}
                    key={props.forecast.city.id + Math.random() * 100}
                />
                else return <Graph
                    margin={(tempMax - el) * 5}
                    bg={props.tempBg(el)}
                    data={props.forecast.list[i]}
                    key={props.forecast.city.id + Math.random() * 100}
                />
            })}
        </div>
    )
}