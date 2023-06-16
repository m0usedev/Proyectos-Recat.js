import React from 'react'; //nos permite usar todo el poder de react
import '../hojas-de-estilos/Testimonio.css'
//definimos componente, sera funcional

function Testimonio(){
  //esto devolvera la estructura del componente
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require ('../imagenes/testimonio-emma.png')}
        alt='Foto de Emma'
      ></img>
      <div className='contenedor-texto-textimonio'>
        <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
        <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
        <p className='texto-testimonio'>loren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusmloren impusm</p>
      </div>
    </div>
  );
}

export default Testimonio;

