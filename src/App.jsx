import './index.css';
import { useState } from 'react';
import TablaEmpleados from './components/TablaEmpleados';
import Menu from './components/Menu';
import './App.css';

function App() {
  return(
    <div className="app-container font-sans bg-gray-100 min-h-screen">
      <Menu/>
      <div className="contenido">
        <h1 className="font-bold text-3xl">Sistema de Gestión de Empleados</h1>
        <TablaEmpleados />
      </div>
    </div>
  );
}

export default App;