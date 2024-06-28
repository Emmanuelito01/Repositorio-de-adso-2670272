import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ListaComponentes from "../Paginas/ListaComponentes";
import NotFound from '../Paginas/NotFound'
import Navegar from "../Paginas/Navegar";

const App=()=>(
    <BrowserRouter>
        <Routes>
            <Route exact path="/Lista" Component={ListaComponentes} />
            <Route exact path="/Lista/Nueva" Component={Navegar} />
            <Route  path="*" Component={NotFound} />
        </Routes>
    </BrowserRouter>
)

export default App