import React, { useState } from 'react';
import { Avatar, Card, Table, Button, Space, Tag, Modal } from 'antd';
import { UserOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import Registro from './registro';
import Perfil from './perfil';

const columnsBase = [
  { title: 'Nombre', dataIndex: 'nombre', key: 'nombre' },
  { title: 'Correo', dataIndex: 'correo', key: 'correo' },
  {
    title: 'Rol',
    dataIndex: 'rol',
    key: 'rol',
    render: (rol) => (
      <Tag color={rol === 'Administrador' ? 'blue' : 'green'}>{rol}</Tag>
    ),
  },
  { title: 'Fecha de Creación', dataIndex: 'fecha', key: 'fecha' },
];

const Usuario = () => {
  const [usuarios, setUsuarios] = useState([
    { key: '1', nombre: 'Juan Pérez', correo: 'juan.perez@example.com', rol: 'Administrador', fecha: '05/08/2023' },
    { key: '2', nombre: 'Maria Lopez', correo: 'maria.lopez@example.com', rol: 'Empleado', fecha: '12/03/2023' },
    { key: '3', nombre: 'Carlos Sanchez', correo: 'carlos.sanchez@example.com', rol: 'Empleado', fecha: '18/01/2023' },
  ]);

  const [modalAbierto, setModalAbierto] = useState(false);
  const [perfilAbierto, setPerfilAbierto] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  const abrirPerfil = () => {
    setUsuarioSeleccionado(usuarios[0]);
    setPerfilAbierto(true);
  };

  const cerrarPerfil = () => {
    setPerfilAbierto(false);
    setUsuarioSeleccionado(null);
  };

  const agregarUsuario = (nuevoUsuario) => {
    const hoy = new Date().toLocaleDateString('es-MX');
    setUsuarios(prev => [
      ...prev,
      { ...nuevoUsuario, key: Date.now().toString(), fecha: hoy },
    ]);
    cerrarModal();
  };

  const columns = [
    ...columnsBase,
    {
      title: 'Acciones',
      key: 'acciones',
      render: () => (
        <Space size="middle">
          <Button icon={<EditOutlined />} size="small" />
          <Button icon={<DeleteOutlined />} size="small" danger />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Card style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Avatar size={64} icon={<UserOutlined />} />
            <div>
              <h2 style={{ margin: 0 }}>Juan Pérez</h2>
              <p style={{ margin: 0, color: '#888' }}>Administrador</p>
              <Tag color="green" style={{ marginTop: 4 }}>En línea</Tag>
            </div>
          </div>
          <Button type="primary" onClick={abrirPerfil}>Editar Perfil</Button>
        </div>
      </Card>

      <Card
        title="Gestión de Usuarios"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={abrirModal}>
            Crear Usuario
          </Button>
        }
      >
        <Table columns={columns} dataSource={usuarios} rowKey="key" />
      </Card>

      <Modal
        title="Crear Usuario"
        open={modalAbierto}
        onCancel={cerrarModal}
        footer={null}
      >
        <Registro onAgregar={agregarUsuario} />
      </Modal>

      <Modal
        title="Perfil del usuario"
        open={perfilAbierto}
        onCancel={cerrarPerfil}
        footer={null}
      >
        <Perfil usuario={usuarioSeleccionado} />
      </Modal>
    </div>
  );
};

export default Usuario;