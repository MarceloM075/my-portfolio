import React from "react"
import './styles.css'

function Links(props){
    function isHome(){
        if(!props.isHome){
            return(
                <ul>
                    LOGO
                </ul>
            )
        }
    }

    return(
        <>
            <nav className={ props.isHome ? 'links' : 'menu' } data-animation={ props.isHome ? '' : 'menu-animation' }>
                {isHome()}
                <ul>
                    <li>
                        <a className={ props.isHome ? 'links-itens' : 'nav-itens' } href="/">Projects</a>
                    </li>
                    <li>
                        <a className={ props.isHome ? 'links-itens' : 'nav-itens' } href="./skills" disabled>Skills</a>
                    </li>
                    <li>
                        <a className={ props.isHome ? 'links-itens' : 'nav-itens' } href="/">About Me</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Links