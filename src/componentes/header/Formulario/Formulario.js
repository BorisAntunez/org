import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../../Campo/CampoTexto"
import ListaOpciones from "../../ListaOpciones"
import Boton from "../../Boton"



const Formulario = (props)=> {
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    //crear equipos nuevos con su color
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e)=> {
        e.preventDefault();
        console.log("manejarEnvio")
        let datosEnviar = {
            nombre: nombre,
            puesto : puesto,
            foto : foto,
            equipo:equipo
        }
      registrarColaborador(datosEnviar)
    }

    const manejarNuevoEquipo = (e)=>{
        e.preventDefault()
        console.log(titulo, color)
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
            titulo="Nombre Completo" 
            placeholder="Ingresar nombre completo" 
            required 
            valor={nombre} 
            actualizarValor={actualizarNombre}
            />
            <CampoTexto 
            titulo="Puesto" 
            placeholder="Ingresar puesto" 
            required
            valor={puesto}
            actualizarValor={actualizarPuesto}
            />
            <CampoTexto 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto}
            actualizarValor={actualizarFoto}
            />
            <ListaOpciones  valor={equipo} 
            actualizarEquipo={actualizarEquipo}
            equipos ={props.equipos}
            />
            <Boton texto="Crear" />

        </form>
        
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto 
            titulo="Titulo" 
            placeholder="Ingresar titulo" 
            required 
            valor={titulo} 
            actualizarValor={actualizarTitulo}
            />
            <CampoTexto 
            titulo="Color" 
            placeholder="Ingresar el color en hex" 
            required
            valor={color}
            actualizarValor={actualizarColor}
            type="color"
           
           
            />
              
              <Boton texto="Registrar equipo" />
            
            </form>



    </section>
}

export default Formulario
