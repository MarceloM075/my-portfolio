import React from "react"
import './styles.css'

function Title(props){
    const styles = {
        fontSize: props.fontSize ? props.fontSize : '2rem',
        color: `var(${ props.color })`,
        fontWeight: `${ props.fontWeight ? props.fontWeight : '500'}`
    }

    return (
        <>
            <props.tag className="title-home" style={ styles }>
                { props.children }
            </props.tag>
        </>
    )
}

export default Title