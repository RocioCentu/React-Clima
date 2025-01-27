import React,{useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Formulario = ({busqueda,guardarBusqueda,guardarConsulta}) => {

   
    const [error,guardarError] = useState(false);
    const {ciudad,pais} = busqueda;
   //funcion para guardar los resultados de la busqueda
   const handleChange= e=>{
       guardarBusqueda({
           ...busqueda,
           [e.target.name]: e.target.value
       });
   }

   const handleSubmit= e=>{
       e.preventDefault();

       //validar
        if(ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

       //pasarlo al componente principal
       guardarConsulta(true);

   }
    return ( 
        <form
        onSubmit ={handleSubmit}>
            {error? (<Error mensaje="TODOS LOS CAMPOS SON OBLIGATORIOS"/>): null}
           <div className="input-field col s12">
            <input 
            value={ciudad}
            type="text"
            name="ciudad"
            id="ciudad"
            onChange={handleChange}
            />
            <label htmlFor="ciudad">Ciudad:</label>
           </div>

           <div className="input-field col s12">
           <select
           value={pais}
           name="pais"
           id="pais"
           onChange={handleChange}
           >
                <option value="">--- Seleccione un pais ---</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">Mexico</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="PE">Peru</option>
           </select>
            <label htmlFor="pais">Pais:</label>
           </div>
           <div className="input-field col s12">
              <input
              type="submit"
              value="Buscar Clima"
              className="btn waves-effect waves-light btn-large btn-block yellow accent-4"
              />
           </div>
        </form>
     );
}
 Formulario.propTypes ={
    busqueda :PropTypes.object.isRequired,
    guardarBusqueda:PropTypes.func.isRequired,
    guardarConsulta:PropTypes.func.isRequired
 }
export default Formulario;