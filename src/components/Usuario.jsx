import React from 'react';
import { Avatar, Card, Table, Button, Space, Tag } from 'antd';
import { UserOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const columns = [
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

const data = [
  { key: '1', nombre: 'Juan Pérez', correo: 'juan.perez@example.com', rol: 'Administrador', fecha: '05/08/2023' },
  { key: '2', nombre: 'Maria Lopez', correo: 'maria.lopez@example.com', rol: 'Empleado', fecha: '12/03/2023' },
  { key: '3', nombre: 'Carlos Sanchez', correo: 'carlos.sanchez@example.com', rol: 'Empleado', fecha: '18/01/2023' },
];

const Usuario = () => {
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
          <Button type="primary">Editar Perfil</Button>
        </div>
      </Card>

      <Card
        title="Gestión de Usuarios"
        extra={
          <Button type="primary" icon={<PlusOutlined />}>
            Crear Usuario
          </Button>
        }
      >
        <Table columns={columns} dataSource={data} rowKey="key" />
      </Card>
    </div>
  );
};

export default Usuario;