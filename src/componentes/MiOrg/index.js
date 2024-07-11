import { useState } from "react"
import "./MiOrg.css"


const MiOrg = (props)=>{
    //Estado -hooks
    //useState
    //useState()
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
      
      const [mostrar, actualizarMostrar] = useState(true)
      const manejarClick = ()=>{
        console.log("Mostrar/Ocultar elemento")
        actualizarMostrar(!mostrar)
      }
    return <section className="orgSection">
        <h3 className="tittle">Mi Organizacion</h3>
        <img src="/img/add.png" alt="foto-agregar" onClick={props.cambiarMostrar}/>
        
    </section>
}

export default MiOrg