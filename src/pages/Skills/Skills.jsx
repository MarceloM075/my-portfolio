import React from "react"
import Card from "../../components/Card/Card"
import Cards from "../../components/Cards/Cards"
import Title from "../../components/Title/Title"
import COLORS from "../../assets/js/colors"
import SKILLS from "../../assets/js/skills"

//CSS imports
import './styles.css'
import '../../assets/css/box-style.css'

const cardAtrr = {
     'fontSize': '1rem',
     'fontWeight': '800',
     'color': COLORS.darkPurple,
     'backgroundColor': COLORS.lightPurple,
     'skill': '',
     'src': ''
}

function skillsCards(){
   const arr = []

   for(let key in SKILLS){
      const temp = cardAtrr
      temp.skill = `${key}` 
      temp.src = `${SKILLS[key]}`
      arr.push(<Card {...temp} />)
   }

   return arr
}

function Skills(){  
    return(
        <> 
            <Title 
                tag={'h1'}
                fontSize={'4rem'}
                fontWeight={'600'}
                color={ COLORS.darkPurple }
                className={'title-skills'}
                data-animation='title-animation'
            >
                SKILLS
            </Title>
            <Cards className='box-style' data-animation='cards-animation'>
                  {skillsCards()}
            </Cards>
        </>
    )
}

export default Skills