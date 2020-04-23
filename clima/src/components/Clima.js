import React from 'react';
import PropTypes from 'prop-types';


const Clima = ({resultado}) => {
    const {name,main}= resultado;
    if(!name)return null;
    const k=273.15;
    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
         
              <h3 className="temperatura">Temperatura Actual de {name} es:
                  {parseFloat(main.temp - k,10).toFixed(2)}<span>&#x2103;</span>
              </h3>
              <h5 className="temperatura">
                  Temperatura Maxima:
                  {parseFloat(main.temp_max - k,10).toFixed(2)}<span>&#x2103;</span>
              </h5>
              <h5 className="temperatura">
                  temperatura Minima:
                  {parseFloat(main.temp_min - k,10).toFixed(2)}<span>&#x2103;</span>
              </h5>
             </div>
        </div>
     );
}
 Clima.prototypes={
     resultado :PropTypes.object.isRequired
 }
export default Clima;