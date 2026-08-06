import './index.css';
import { useState } from 'react';
import TablaEmpleados from './components/TablaEmpleados';
import Menu from './components/Menu';
import './App.css';

function App() {
  return(
    <div className="app-container">
      <Menu/>
      <div className="contenido">
        <h1>Sistema de Gestión de Empleados</h1>
        <TablaEmpleados />
      </div>
    </div>
  );
}

export default App;