import Circle from "../../components/Circle/Circle";
import Circles from "../../components/Circles/Circles";
import COLORS from "../../assets/js/colors";
import Title from "../../components/Title/Title"
import Links from "../../components/Links/Links";
import './styles.css'

/*-- The data-orientation attr is to define the start orientation of the purple line that is around the circle. --*/
/*-- The data-after attr is to define the color of the ::after pseudo-element, it's needed when the color attr is set to COLORS.transparent. --*/
/*-- The data-animation attr is to define the animation of the circle or the animation of the ::before pseuso-element. --*/
/*-- The isHome const is to define what menu links (Links component) we are going to use. --*/

function Home(){
    const isHome = true

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
                    size={ '90%, 600px' } 
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
                    data-after={ COLORS.lightGreen } 
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
                <div className="circle-menu-home">
                    <div className="intro-text">
                        <p>
                            HI, I'M <span>MARCELO</span>
                        </p>
                        <p>
                            I'M A <span>FRONT-END WEB DEVELOPER</span> AND WELCOME TO MY PORTFOLIO'S WEB SITE
                        </p>
                    </div>
                    <div className="links-home-page">
                        <a href="/skills">Skills</a>
                        <a href="/">About Me</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home