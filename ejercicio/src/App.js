import './App.css';

import Testimonio from './componentes/Testimonios.js';

function App() {//componente principal de la aplicacion
  return (
    <div className="App">

      <div className='contenedor-principal'>
        <h1>Esta es la opinion de nuestros clinetes:</h1>
        <Testimonio />
      </div>

    </div>
  );
}

export default App;

