import Circle from "../../components/Circle/Circle";
import Circles from "../../components/Circles/Circles";
import COLORS from "../../styles/colors/colors";
import Title from "../../components/Title/Title"
import './styles.css'

/*-- The data-orientation attr is to define the start orientation of the purple line that is around the circle. --*/
/*-- The data-after attr is to define the color of the ::after pseudo-element, it's needed when the color attr is set to COLORS.transparent. --*/
/*-- The data-animation attr is to define the animation of the circle or the animation of the ::before pseuso-element. --*/

function Home(){
    return(
        <> 
            <Circles>
                <Circle 
                    size={ '90%, 600px' } 
                    color={ COLORS.lightGreen } 
                    data-orientation="vertical" 
                    data-animation={ "increaseVertical-clockwise" } 
                />
                <Circle 
                    size={'90%, 600px'} 
                    color={ COLORS.transparent } 
                    data-orientation="vertical" 
                    data-after={ COLORS.lightGreen } 
                    data-animation={ "decreaseVertical-clockwise" } 
                />
                <Circle 
                    size={ '90%, 600px' } 
                    color={ COLORS.transparent } 
                    data-orientation="horizontal" 
                    data-after={ COLORS.lightGreen } 
                    data-animation={ "increaceHorizontal-counterclockwise" } 
                />
                <Circle 
                    size={ '90%, 600px' } 
                    color={ COLORS.transparent } 
                    data-orientation="horizontal" 
                    data-after={COLORS.lightGreen} 
                    data-animation={ "decreaceHorizontal-counterclockwise" } 
                />
                <Circle 
                    size={ '80%, 535px' } 
                    color={ COLORS.mediumGreen } 
                    data-animation={ "breath" }
                />
                <Circle 
                    size={ '70%, 490px' } 
                    color={ COLORS.lightGreen } 
                />
            </Circles> 
            <div className="wrapper-home">
                <Title 
                    text={ 'HOME' } 
                    fontSize={ '6.5rem' } 
                    fontWeight={ '700' } 
                />
                <div className="links">
                    <a href="/">Projects</a>
                    <a href="/">Skills</a>
                    <a href="/">About Me</a>
                </div>    
            </div>
        </>
    )
}

export default Home