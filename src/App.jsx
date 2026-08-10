import './index.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import TablaEmpleados from './components/TablaEmpleados';
import Formempleado from './components/formempleado';
import TablaVacantes from './components/TablaVacantes';
import Formvacantes from './components/formvacantes';
import TablaInicio from './components/TablaInicio';
import Menu from './components/Menu';
import './App.css';

function App() {
  return(
    <div className="app-container font-sans bg-gray-100 min-h-screen">
      <Menu/>
      <div className="contenido">
        <h1 className="font-bold text-3xl">Sistema de Gestión de Empleados</h1>
         <Routes>
          <Route path="/" element={<TablaInicio />} />
          <Route path="/gestion" element={<><Formempleado /><TablaEmpleados /></>} />
          <Route path="/vacantes" element={<><Formvacantes /><TablaVacantes /></>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;