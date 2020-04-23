import React,{Fragment,useState ,useEffect} from 'react';
//import styled from '@emotion/styled';
//import Modelo from './components/modelo';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

import './App.css';

function App() {
   //State
    const [busqueda,guardarBusqueda] = useState({
        ciudad:'',
        pais:''
    });
    const [resultado,guardarResultado] = useState({});
    const [consultar,guardarConsulta] = useState(false);
    const [error,guardarError] = useState(false);

    const {ciudad,pais}=busqueda;
    useEffect(()=>{
     const consultarAPI=async()=>{
     if(consultar){
      const appId= 'beb0aa9aec12ecda7c3b1228b38eaca3';
      const url=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
      const respuesta=await fetch(url);
      const resultado = await respuesta.json();
      guardarResultado(resultado);
      guardarConsulta(false);
      if(resultado.cod==="404"){
        guardarError(true);
      }else{
        guardarError(false);
      }
     }
     
     }
     consultarAPI();
     //eslint-disable-next-line
    },[consultar]);
    let componente;
   if(error){
       componente=<Error mensaje="No hay resultados"/>;
   }else{
        componente=<Clima
        resultado={resultado}
        />;
   }
  return (
    <Fragment>
      <Header
      titulo="Clima React app"
      />
      <div className="container">
         <div className="row">
              <div className="col m6 s12">
              <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsulta={guardarConsulta}
                 />
               </div>
             <div className="col m6 s12">
               {componente}
            </div>
          </div>
      </div>
      
      
    </Fragment>
    
  );
}

export default App;