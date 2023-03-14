import React from 'react'
import './styles.css'


function Circle(props){
    const styles = {
        height: `max(${props.size})`,
        backgroundColor: `var(${props.color})`
    }
    console.log(props)

    return (
        <div className='circle' style={ styles } data-lines={props['data-lines']} data-after={ props['data-lines'] ? props.color : ''}></div>
    )
}

export default Circle