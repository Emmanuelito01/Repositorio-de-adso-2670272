import React from "react";
import Componentes from "../Componentes/Componentes"
import useFetch from "../Hook/hook";
import url from "../config";

const ContenedorComponentes=()=>{
    const {data}=useFetch(`${url}/info`)
    return <Componentes
    data={data}
    />
}
export default ContenedorComponentes