import React from 'react';
import '../css/componentes.css';

export function Boton(props){
  return (
    <button className={props.tipo ? 'boton-clic' : 'boton-reiniciar'}
      onClick={props.funcion}
    >
      {props.texto}
    </button>
  );
}

export function Contador(props){
  return (
    <div className='contador'>
      {props.numeroClics}
    </div>
  );
}