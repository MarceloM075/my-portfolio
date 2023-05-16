import React from "react"
import './styles.css'

function Nav(props){
    
    window.addEventListener('load', () => {
        const url = window.location.pathname
        const navItens = document.getElementsByClassName('nav-itens')
        const arr = []
      
        for(let item of navItens){
            arr.push(item)  
        }

        const result = arr.filter(x => x.getAttribute("href") === url)
        result[0].setAttribute("disabled", "disabled")
        console.log(result)
    })    
    
        
    
    return(
        <>
            <nav className={ 'menu' } /*data-animation={ props.isHome ? '' : 'menu-animation' }*/>
                <p>LOGO</p>
                <ul>
                    <li>
                        <a className={ 'nav-itens' } href="/projects">Projects</a>
                    </li>
                    <li>
                        <a className={ 'nav-itens' } href="/skills">Skills</a>
                    </li>
                    <li>
                        <a className={ 'nav-itens' } href="/">About Me</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav