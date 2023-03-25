import React from "react"
import './styles.css'

function Cards(props){

    const classes = props.className + ' cards'

    return(
        <>
            <div className="wrapper-cards" data-animation={props['data-animation'] ? props['data-animation'] : ''}>
                <div className={classes}>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Cards