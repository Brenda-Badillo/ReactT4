import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Base} from "../pages/index"
import {Dashboard} from "../pages/Create/Update/Dashboard"

function Router(){
    return(<BrowserRouter>
    <Routes>
        <Route path="/" element={<Base/>}>
            <Route index element={<Dashboard/>}/>
        </Route>
    </Routes>
    </BrowserRouter>)
}

export default Router;