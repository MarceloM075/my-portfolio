import React from "react"
import COLORS from "../../styles/colors/colors"
import '../Title/styles.css'

function Title(props){
    const styles = {
        fontSize: props.fontSize,
        color: `var(${ COLORS.darkPurple })`,
        fontWeight: `${ props.fontWeight }`
    }

    return (
        <>
            <h1 className="title-home" style={ styles }>
                { props.text }
            </h1>
        </>
    )
}

export default Title