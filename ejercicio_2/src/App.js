import './App.css';
import {Boton, Contador} from './componentes/componentes.js';
//importamos para usar hooks useState
import { useState } from 'react';

function App() {

  //hook
  const [numClics, setNumClics] = useState(0);
  
  const majejarClic = () => {
    setNumClics(numClics+1);

  }

  const reiniciarContador = () => {

    setNumClics(0);

  }

  return (
    <div className='App'>
     <div className='contenedor-principal'>
      <Contador numeroClics={numClics} />
      <Boton 
        texto='Clic'
        tipo={true}
        funcion={majejarClic}
      />
      <Boton 
        texto='Reiniciar'
        tipo={false}
        funcion={reiniciarContador}
      />
     </div>
    </div>
  );
}

export default App;
