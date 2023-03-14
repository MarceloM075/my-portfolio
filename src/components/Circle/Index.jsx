import React from 'react'
import COLORS from '../../styles/colors/colors'
import './styles.css'


function Circle(props){
    const styles = {
        height: `max(${props.size})`,
        backgroundColor: `var(${props.color})`
    }

    function isBackgroundTransparent(){
        if(props.color === COLORS.transparent){
            return props['data-after']
        }else{
            return props.color
        }
    }

    return (
        <div 
            className='circle' 
            style={ styles } 
            data-orientation={ props['data-orientation'] } 
            data-after={ isBackgroundTransparent() }
        >
        </div>
    )
}

export default Circle