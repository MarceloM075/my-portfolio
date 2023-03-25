import { Route, Routes } from "react-router-dom"
import Home from '../pages/Home/Home'
import Skills from '../pages/Skills/Skills'

function MyRoutes(){
    return(
        <Routes>
            <Route exact path='' element={<Home />} />
            <Route path='skills' element={<Skills />} />
        </Routes>
    )
}

export default MyRoutes