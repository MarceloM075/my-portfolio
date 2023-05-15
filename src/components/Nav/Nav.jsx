import React from "react"
import './styles.css'

function Nav(props){
    
    return(
        <>
            <nav className={ props.isHome ? 'links' : 'menu' } data-animation={ props.isHome ? '' : 'menu-animation' }>
                <p>LOGO</p>
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

export default Nav