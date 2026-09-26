import './index.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import TablaEmpleados from './components/TablaEmpleados';
import Formempleado from './components/formempleado';
import TablaVacantes from './components/TablaVacantes';
import Formvacantes from './components/formvacantes';
import TablaInicio from './components/TablaInicio';
import IniciarSesion from './components/iniciosesion';
import Usuario from './components/Usuario';
import { Card, message } from 'antd';
import Menu from './components/Menu';
import './App.css';


function App() {
  const [empleados, setEmpleados] = useState([]);
  const [vacantes, setVacantes] = useState([]);
  const [sesionIniciada, setSesionIniciada] = useState(false);
  const [cargando] = useState(false);
  const [editingEmpleado, setEditingEmpleado] = useState(null);
  const [editingVacante, setEditingVacante] = useState(null);

  const iniciarSesion = () => {
    setSesionIniciada(true);
  };

  const cerrarSesion = () => {
    setSesionIniciada(false);
  };

  // --- Empleados: solo frontend (estado local) ---
  const agregarEmpleado = (nuevoEmpleado) => {
    const creado = { ...nuevoEmpleado, edad: Number(nuevoEmpleado.edad), id: Date.now() };
    setEmpleados((prev) => [...prev, creado]);
  };

  const eliminarEmpleado = (id) => {
    setEmpleados((prev) => prev.filter((e) => e.id !== id));
    message.success('Empleado eliminado');
  };

  const actualizarEmpleado = (id, valores) => {
    const actualizado = { ...valores, edad: Number(valores.edad), id };
    setEmpleados((prev) => prev.map((e) => (e.id === id ? actualizado : e)));
    setEditingEmpleado(null);
  };

  // --- Vacantes: solo frontend (estado local) ---
  const agregarVacante = (nuevaVacante) => {
    const creada = { ...nuevaVacante, id: Date.now() };
    setVacantes((prev) => [...prev, creada]);
  };

  const eliminarVacante = (id) => {
    setVacantes((prev) => prev.filter((v) => v.id !== id));
    message.success('Vacante eliminada');
  };

  const actualizarVacante = (id, valores) => {
    const actualizada = { ...valores, id };
    setVacantes((prev) => prev.map((v) => (v.id === id ? actualizada : v)));
    setEditingVacante(null);
  };

  return (
    sesionIniciada ? (
      <div className="app-container font-sans bg-gray-100 min-h-screen">
        <Menu onLogout={cerrarSesion} />
        <div className="contenido">
          <h1 className="font-bold text-3xl mb-8">Sistema de Gestión de Empleados</h1>
          <Routes>
            <Route path="/" element={<TablaInicio data={empleados} loading={cargando} />} />
            <Route
              path="/gestion"
              element={
                <>
                  <Card title={editingEmpleado ? "Editar empleado" : "Agregar empleado"} style={{ marginBottom: 24 }}>
                    <Formempleado
                      onAgregar={agregarEmpleado}
                      editing={editingEmpleado}
                      onActualizar={actualizarEmpleado}
                      onCancelar={() => setEditingEmpleado(null)}
                    />
                  </Card>
                  <TablaEmpleados data={empleados} loading={cargando} onEliminar={eliminarEmpleado} onEditar={setEditingEmpleado} />
                </>
              }
            />
            <Route
              path="/vacantes"
              element={
                <>
                  <Card title={editingVacante ? "Editar vacante" : "Agregar vacante"} style={{ marginBottom: 24 }}>
                    <Formvacantes
                      onAgregar={agregarVacante}
                      editing={editingVacante}
                      onActualizar={actualizarVacante}
                      onCancelar={() => setEditingVacante(null)}
                    />
                  </Card>
                  <TablaVacantes data={vacantes} loading={cargando} onEliminar={eliminarVacante} onEditar={setEditingVacante} />
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
