import Circle from "../components/Circle/Index";
import Circles from "../components/Circles/Index";
import COLORS from "../styles/colors/colors";

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
        </>
    )
}

export default Home