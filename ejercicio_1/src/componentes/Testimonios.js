import React from 'react'; //nos permite usar todo el poder de react
import '../hojas-de-estilos/Testimonio.css'
//definimos componente, sera funcional

function Testimonio(props){
  //esto devolvera la estructura del componente
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require ('../imagenes/testimonio-'+props.imagen+'.png')}
        alt='Foto de Emma'
      ></img>
      <div className='contenedor-texto-textimonio'>
        <p className='nombre-testimonio'><b>{props.nombre}</b> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <b>{props.empresa}</b></p>
        <p className='texto-testimonio' dangerouslySetInnerHTML={{ __html: props.testimonio }}></p>
      </div>
    </div>
  );
}

export default Testimonio;

