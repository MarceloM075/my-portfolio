import React from "react"
import Links from "../../components/Links/Links"
import Card from "../../components/Card/Card"
import Cards from "../../components/Cards/Cards"
import Title from "../../components/Title/Title"
import COLORS from "../../assets/js/colors"


// Icons imports
import reactIcon from "../../assets/img/react-svgrepo-com.svg"
import cssIcon from "../../assets/img/css-svgrepo-com.svg"
import htmlIcon from "../../assets/img/html-svgrepo-com.svg"
import bootstrapIcon from "../../assets/img/bootstrap-svgrepo-com.svg"
import gulpIcon from "../../assets/img/gulp-svgrepo-com.svg"
import javascriptIcon from "../../assets/img/javascript-svgrepo-com.svg"
import jqueryIcon from "../../assets/img/jquery-svgrepo-com.svg"
import webpackIcon from "../../assets/img/webpack-svgrepo-com.svg"

//CSS imports
import './styles.css'
import '../../assets/css/box-style.css'

function Skills(){  
    const cardAtrr = {
        'fontSize': '1rem',
        'fontWeight': '800',
        'color': COLORS.darkPurple,
        'backgroundColor': COLORS.lightPurple
    }

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
                 <Card 
                    skill='React' 
                    src={reactIcon}
                    {...cardAtrr}
                 />
                 <Card 
                    skill='CSS' 
                    src={cssIcon}
                    {...cardAtrr}
                 />
                 <Card 
                    skill='Bootstrap' 
                    src={bootstrapIcon}
                    {...cardAtrr}
                 />
                 <Card 
                    skill='HTML' 
                    src={htmlIcon}
                    {...cardAtrr}
                 />
                 <Card 
                    skill='Gulp' 
                    src={gulpIcon}
                    {...cardAtrr}
                 />
                 <Card 
                    skill='JavaScript' 
                    src={javascriptIcon}
                    {...cardAtrr}
                 />
                 <Card 
                    skill='jQuery' 
                    src={jqueryIcon}
                    {...cardAtrr}
                 />
                 <Card 
                    skill='Webpack' 
                    src={webpackIcon}
                    {...cardAtrr}
                 />
            </Cards>
        </>
    )
}

export default Skills