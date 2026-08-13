import './index.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import TablaEmpleados from './components/TablaEmpleados';
import Formempleado from './components/formempleado';
import TablaVacantes from './components/TablaVacantes';
import Formvacantes from './components/formvacantes';
import TablaInicio from './components/TablaInicio';
import IniciarSesion from './components/iniciosesion';
import { Card, Row, Col } from 'antd';
import Menu from './components/Menu';
import './App.css';

function App() {
  const [empleados, setEmpleados] = useState([
    { key: '1', nombres: 'John', apellidos: 'Marrón', edad: 32, area: 'Ingeniería', puesto: 'Ingeniero de software' },
    { key: '2', nombres: 'Jim', apellidos: 'Verde', edad: 42, area: 'Ventas', puesto: 'Asociado de ventas' },
  ]);
  const [vacantes, setVacantes] = useState([
  { key: '1', nombre: 'Desarrollador Web', area: 'sistemas', estado: 'activa' },
  ]);

  const agregarVacante = (nuevaVacante) => {
    setVacantes(prev => [...prev, { ...nuevaVacante, key: Date.now().toString() }]);
  };

  const agregarEmpleado = (nuevoEmpleado) => {
    setEmpleados(prev => [...prev, { ...nuevoEmpleado, key: Date.now().toString() }]);
  };

  return(
    <div className="app-container font-sans bg-gray-100 min-h-screen">
      <Menu/>
      <div className="contenido">
        <h1 className="font-bold text-3xl mb-8">Sistema de Gestión de Empleados</h1>
         <Routes>
          <Route path="/" element={<>
                <TablaInicio data={empleados} />
              </>
            } 
            />
          <Route
            path="/gestion"
            element={
              <>
                <Card title="Agregar empleado" style={{ marginBottom: 24 }}>
                  <Formempleado onAgregar={agregarEmpleado} />
                </Card>
                <TablaEmpleados data={empleados} />
              </>
            }
          />
          <Route
            path="/vacantes"
            element={
              <>
                <Card title="Agregar vacante" style={{ marginBottom: 24 }}>
                  <Formvacantes onAgregar={agregarVacante} />
                </Card>
                <TablaVacantes data={vacantes} />
              </>
            }
          />
          <Route path="/login" element={<IniciarSesion />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;