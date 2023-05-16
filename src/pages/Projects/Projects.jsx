import Title from '../../components/Title/Title'
import Box from '../../components/Box/Box'
import './styles.css'

import { useState } from 'react'

import COLORS from '../../assets/js/colors'
import PROJECTIMGS from '../../assets/js/projectsImgs'


function Projects(){
    let [img, setImg] = useState()

    const changeImg = (element) => {
        img = element.target.previousElementSibling.id
        let imgTag = document.querySelector('#imgTag')
        imgTag.children[0].style = 'display: block;'
        imgTag.style = 'opacity: 0;'
        setTimeout(function(){
            imgTag.style = 'opacity: 0.33;'
            setImg(PROJECTIMGS[img])
        }, 100)
        setTimeout(function(){
            imgTag.style = 'opacity: 0.66;'
        }, 150)
        setTimeout(function(){
            imgTag.style = 'opacity: 1;'
        }, 200)
    }


    return(
        <>
            <Title 
                tag={'h1'}
                fontSize={'4rem'}
                fontWeight={'600'}
                color={ COLORS.white }
                className={'title-projects'}
                data-animation='title-animation'
            >
                Projects
            </Title>

            <Box className={'projects-box'} data-animaton={'box-animation'}>
                <div id='imgTag'>
                    <img src={img} alt="" />
                </div>
                <div>
                    <ul>
                        <li>
                            <input type="radio" name="projects" id="criandoUmSite" className='projects-itens' />
                            <label htmlFor="criandoUmSite" onClick={changeImg}><span>Criando um site</span></label>
                        </li>
                        <li>
                            <input type="radio" name="projects" id="calculadora" className='projects-itens' />
                            <label htmlFor="calculadora" onClick={changeImg}><span>Calculadora</span></label>
                        </li>
                        <li>
                            <input type="radio" name="projects" id="exemplo3" className='projects-itens' />
                            <label htmlFor="exemplo3" onClick={changeImg}><span>Exemplo 3</span></label>
                        </li>
                        <li>
                            <input type="radio" name="projects" id="exemplo4" className='projects-itens' />
                            <label htmlFor="exemplo4" onClick={changeImg}><span>Exemplo 4</span></label>
                        </li>
                    </ul>
                </div>
            </Box>
            
        </>
    )
}

export default Projects