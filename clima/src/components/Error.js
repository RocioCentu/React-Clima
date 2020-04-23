import React from 'react';
import PropTypes from 'prop-types';

const Error = ({mensaje}) => {
return (  <div className="indigo-text text-lighten-5 card-panel center-align card  red darken-4 error">{mensaje}</div>)
}
Error.propTypes={
    mensaje: PropTypes.string.isRequired
}


export default Error;