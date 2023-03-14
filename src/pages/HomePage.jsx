import Circle from "../components/Circle/Index";
import Circles from "../components/Circles/Index";
import COLORS from "../styles/colors/colors";

function HomePage(){
    return(
        <> 
            <Circles>
                <Circle size={'90%, 600px'} color={COLORS.lightGreen} data-lines="true" />
                <Circle size={'80%, 535px'} color={COLORS.mediumGreen} />
                <Circle size={'70%, 490px'} color={COLORS.lightGreen} />
            </Circles>
        </>
    )
}

export default HomePage