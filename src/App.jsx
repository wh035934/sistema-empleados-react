import './index.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect} from 'react';
import TablaEmpleados from './components/TablaEmpleados';
import Formempleado from './components/formempleado';
import TablaVacantes from './components/TablaVacantes';
import Formvacantes from './components/formvacantes';
import TablaInicio from './components/TablaInicio';
import IniciarSesion from './components/iniciosesion';
import Usuario from './components/Usuario';
import { Card, Row, Col } from 'antd';
import Menu from './components/Menu';
import { supabase } from './supabaseClient';
import './App.css';


function App() {
useEffect(() => {
  const cargarEmpleados = async () => {
    const { data, error } = await supabase.from('empleados').select('*');
    if (error) {
      console.log('Error cargando empleados:', error);
    } else {
      setEmpleados(data);
    }
  };

  const cargarVacantes = async () => {
    const { data, error } = await supabase.from('vacantes').select('*');
    if (error) {
      console.log('Error cargando vacantes:', error);
    } else {
      setVacantes(data);
    }
  };

  cargarEmpleados();
  cargarVacantes();
}, []);
  const [empleados, setEmpleados] = useState([]);
  const [vacantes, setVacantes] = useState([]);
  const [sesionIniciada, setSesionIniciada] = useState(false);

  const iniciarSesion = () => {
    setSesionIniciada(true);
  };

  const cerrarSesion = () => {
    setSesionIniciada(false);
  };

  const agregarVacante = (nuevaVacante) => {
    setVacantes(prev => [...prev, { ...nuevaVacante, key: Date.now().toString() }]);
  };

  const agregarEmpleado = (nuevoEmpleado) => {
    setEmpleados(prev => [...prev, { ...nuevoEmpleado, key: Date.now().toString() }]);
  };

  return (
    sesionIniciada ? (
      <div className="app-container font-sans bg-gray-100 min-h-screen">
        <Menu onLogout={cerrarSesion} />
        <div className="contenido">
          <h1 className="font-bold text-3xl mb-8">Sistema de Gestión de Empleados</h1>
          <Routes>
            <Route path="/" element={<TablaInicio data={empleados} />} />
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
            <Route
              path="/usuario"
              element={
                <>
                  <Usuario />
                </>
              }
            /></Routes>
        </div>
      </div>
    ) : (
      <IniciarSesion onLogin={iniciarSesion} />
    )
  );
}

export default App;