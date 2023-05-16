import React from "react"
import './styles.css'



function Box(props){
    const classes = props.className ? props.className + ' box' : ' box'

    return(
        <>
            <div className={`wrapper-box`}>
                <div {...props} className={classes} >
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Box