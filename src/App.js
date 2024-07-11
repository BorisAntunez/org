import { useState } from 'react';
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/header/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
import { v4 as uuid } from 'uuid';
function App() {
    const [mostrarFormulario, actualizarFormulario] = useState(false);
    const [colaboradores, actualizarColaboradores] = useState([
      {  
        id: uuid(),  
      nombre:"Boris Antunez",
      puesto:"Owner Web",
      foto:"https://github.com/BorisAntunez.png",
      equipo:"Data Scince",
    },
    {
      id: uuid(),  
      nombre:"Boris Antunez",
      puesto:"Owner Web",
      foto:"https://github.com/BorisAntunez.png",
      equipo:"Programación",
    },
    {  
      id: uuid(),
      nombre:"Boris Antunez",
      puesto:"Owner Web",
      foto:"https://github.com/BorisAntunez.png",
      equipo:"Devops",
    },
    {  
      id: uuid(),
      nombre:"Boris Antunez",
      puesto:"Owner Web",
      foto:"https://github.com/BorisAntunez.png",
      equipo:"Programación",
    }
  ])

  const[equipos, actualizarEquipos] = useState([

    {
      id: uuid(),
      titulo:"Programación",
     colorPrimario:"#57C278",
     colorSecundario: "#D9F7E9"  
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario: "#E8F8FF"  
     },
     {
      id: uuid(),
      titulo:"Data Scince",
      colorPrimario:"#A6D157",
      colorSecundario: "#F0F8E2"  
     },
     {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario: "#FDE7E8"  
     },
     {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario: "#FAE9F5"  
     },
     {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario: "#FFF5D9"  
     },
     {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario: "#FFEEDF"  
     }
]
)




    const cambiarMostrar = ()=>{
      actualizarFormulario(!mostrarFormulario)
    }

    //Registrar colaborador

    const registrarColaborador = (colaborador)=>{
         console.log("Nuevo colaborador", colaborador)
         //Spread operator  los 3 puntos es que toma el dato y lo copia para enviarlo a otro lado.
         actualizarColaboradores([...colaboradores, colaborador])
    }

    //Eliminar Colaborador
    const eliminarColaborador = (id)=>{
        console.log("eliminarColaborador", id)
        const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
        actualizarColaboradores(nuevosColaboradores)

    }

    //Actualizador del color 

     const actualizarColor = (color, id)=>{
         const equiposActualizados = equipos.map( (equipo)=>{
          if(equipo.id === id){
            equipo.colorPrimario = color
          }
          return equipo

         } )

         actualizarEquipos(equiposActualizados)
     }

     //Crear Equipo

     const crearEquipo = (nuevoEquipo)=>{
          console.log(nuevoEquipo)
         actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }])
     }

    
  //Ternario--> condicion ? seMuestra : noSeMuestra
   //Tambien podemos usar algo llamado cortocircuito , que es algo si
   //{condicion && seMuestra}  asi solo identificia de que si se cumple o no el valor para mostrar o no
  return (
    <div >
       <Header />
       { mostrarFormulario === true ? <Formulario 
           equipos={ equipos.map((equipo)=>equipo.titulo) }
           registrarColaborador={registrarColaborador}
           crearEquipo={crearEquipo}
           
           /> : <></> }
       <MiOrg cambiarMostrar={cambiarMostrar}/>

        { 
        equipos.map( (equipo)=>{
          console.log("Equipo:", equipo)
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}

          />
        } )
         }

        <Footer />
    
    </div>
  
  );
}

export default App;
