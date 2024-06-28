import React from "react";
import './Styles/Formu.css'

const Formu=({onChange, form,onSubmit})=>(
    <div className="container espacio">
        <form 
            onSubmit={onSubmit}
        >
            <div className="form-group espacio">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nombre" 
                    name="title"
                    onChange={onChange}
                    value={form.title}
                />
            </div>
            <div className="form-group espacio">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Descripcion" 
                    name="description"
                    onChange={onChange}
                    value={form.description}
                />
            </div>
            <div className="form-group espacio">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Imagen" 
                    name="img"
                    onChange={onChange}
                    value={form.img}
                />
            </div>
            <div className="form-row espacio">
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Color 1" 
                        name="leftColor"
                        onChange={onChange}
                        value={form.leftColor}
                    />
                </div>
                <div className="col espacio abajo">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Color 2" 
                        name="rightcolor"
                        onChange={onChange}
                        value={form.rightcolor}
                    />    
                </div>
            </div>
            
            <button 
                type="submit" 
                
                className="btn btn-primary"
            >
                Submit
            </button>
        </form>
    </div>
)


// render(){
//     const {onChange,form,onSubmit}=this.props
//     return(
        
//     )
// }    
// }
export default Formu