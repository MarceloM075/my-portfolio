import React from 'react'
import COLORS from '../../assets/js/colors'
import './styles.css'


function Circle(props){
    const styles = {
        height: `max(${ props.size })`,
        backgroundColor: `var(${ props.color })`
    }

    const classes = props.className + ' circle'

    function isBackgroundTransparent(){
        if(props.color === COLORS.transparent){
            return props['data-after']
        }else{
            return props.color
        }
    }

    return (
        <div 
            className={ classes } 
            style={ styles } 
            data-orientation={ props['data-orientation'] } 
            data-after={ isBackgroundTransparent() }
            data-animation={ props['data-animation'] }
        >
            {props.children}
        </div>
    )
}

export default Circle