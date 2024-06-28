import { useState, useEffect } from "react";

const useFetch=url=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        const cargarcomponentes=async ()=>{
            let res=await fetch(url)
            let data= await res.json()
            setData(data)
        }
        cargarcomponentes()
    },[url])
    return data
}
export default useFetch