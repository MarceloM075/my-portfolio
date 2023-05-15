import React from "react"
import Card from "../../components/Card/Card"
import Box from "../../components/Box/Box"
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
     'key': '',
     'skill': '',
     'src': ''
}

function skillsCards(){
   const arr = []

   for(let key in SKILLS){
      const temp = cardAtrr
      temp.key = `${key}`
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
                Skills
            </Title>
            <Box data-animation='box-animation'>
                  {skillsCards()}
            </Box>
        </>
    )
}

export default Skills