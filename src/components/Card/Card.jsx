import React from "react"
import "./styles.css"

function Card(props){
    const styles = {
        backgroundColor: `var(${props.backgroundColor})`,
        color: `white`,
        fontWeight: props.fontWeight,
        fontSize: props.fontSize
    }


    return(
        <>
            <div className="wrapper-card">
                <div className="card" style={styles}>
                    <h3>
                        {props.skill}
                    </h3>
                    <img alt={`icone ${props.skill}`} src={props.src}></img>
                </div>
            </div>
        </>
    )
}

export default Card