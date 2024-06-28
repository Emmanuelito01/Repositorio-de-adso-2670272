import React from "react";
import Formu from '../Componentes/Formulario'
import Tarjeta from "../Componentes/Tarjeta";



class Nueva extends React.Component{
    state={
        form:{
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightcolor: ''
        }
    }
    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
            }) 
    }
    handleSubmit=async e=>{
        e.preventDefault()
        this.props.navigate('/Lista')
        try{
            let config={
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state.form)
            }
            let res= await fetch('http://localhost:8000/api/info',config)
            let json=await res.json()
            console.log(json)
            
        }

        catch(error){

        }
    }
render(){
    return(
        <div className="row">
            <div className="col-sm">
                <Tarjeta
                {...this.state.form}
                />
            </div>
            <div className="col-sm">
                <Formu
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                    form={this.state.form}
                />
            </div>
        </div>
       
    )
}    
}
export default Nueva
