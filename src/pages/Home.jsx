import Circle from "../components/Circle/Index";
import Circles from "../components/Circles/Index";
import COLORS from "../styles/colors/colors";

function Home(){
    return(
        <> 
            <Circles>
                <Circle size={'90%, 600px'} color={COLORS.lightGreen} data-orientation="vertical" />
                <Circle size={'90%, 600px'} color={COLORS.transparent} data-orientation="vertical" data-after={COLORS.lightGreen} />
                <Circle size={'90%, 600px'} color={COLORS.transparent} data-orientation="horizontal" data-after={COLORS.lightGreen} />
                <Circle size={'90%, 600px'} color={COLORS.transparent} data-orientation="horizontal" data-after={COLORS.lightGreen} />
                <Circle size={'80%, 535px'} color={COLORS.mediumGreen} />
                <Circle size={'70%, 490px'} color={COLORS.lightGreen} />
            </Circles>
        </>
    )
}

export default Home