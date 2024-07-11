import Colaborador from "../Colaborador"
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props)=>{

    //destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor} = props
      
    const objeto = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }
//con esto envio un tono de color a cada section , la configuracion de esto esta en app.js , 
//ahi configure el arreglo y mande a llamar al arreglo 
    return <>
    { colaboradores.length > 0 &&
        <section className="equipo" style={ objeto }>

          <input
           type="color" 
           className="input-color"
           value={colorPrimario}
           onChange={(event)=>{
            actualizarColor(event.target.value, id)
           }}>

             
          </input>               

        <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
        <div className="colaboradores">
           {
                colaboradores.map( (colaborador, index)=><Colaborador  
                datos={colaborador} 
                key={index} 
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                /> )

           }
           
           
        </div>

    </section>}
    </>
}

export default Equipo


