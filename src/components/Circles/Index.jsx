import React from "react"
import './styles.css'

function Circles(props){
    return(
        <div className="wrapper-circles">
            {props.children}
        </div>
    )
}

export default Circles