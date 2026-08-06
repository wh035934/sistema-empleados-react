import './index.css';
import { useState } from 'react';
import TablaEmpleados from './components/TablaEmpleados';
import Menu from './components/Menu';
import './App.css';

function App() {
  const [nombre, setNombre] = useState("Carlos");
  return(
    <div className="app-container">
      <Menu/>
      <div className="contenido">
        <h1>Sistema de Gestión de Empleados</h1>
        <TablaEmpleados />
        <p>{nombre}</p>
      </div>
    </div>
  );
}

export default App;