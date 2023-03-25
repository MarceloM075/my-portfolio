import React from "react"
import './styles.css'

function Title(props){
    const styles = {
        fontSize: props.fontSize ? props.fontSize : '2rem',
        color: `var(${ props.color })`,
        fontWeight: `${ props.fontWeight ? props.fontWeight : '500'}`
    }

    const classes = props.className + ' title'

    return (
        <>
            <props.tag className={classes} style={ styles } data-animation={props['data-animation'] ? props['data-animation'] : ''}>
                { props.children }
            </props.tag>
        </>
    )
}

export default Title