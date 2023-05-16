import { Route, Routes } from "react-router-dom"
import Home from '../pages/Home/Home'
import Skills from '../pages/Skills/Skills'
import Projects from "../pages/Projects/Projects"

function MyRoutes(){
    return(
        <Routes>
            <Route exact path='' element={<Home />} />
            <Route path='skills' element={<Skills />} />
            <Route path='projects' element={<Projects />} />
        </Routes>
    )
}

export default MyRoutes