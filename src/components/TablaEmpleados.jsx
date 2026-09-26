import React from 'react';
import { Space, Table, Popconfirm, Button } from 'antd';

const TablaEmpleados = ({ data, loading, onEliminar, onEditar }) => {
  const columns = [
    {
      title: 'Nombres',
      dataIndex: 'nombres',
      key: 'nombres',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Apellidos',
      dataIndex: 'apellidos',
      key: 'apellidos',
    },
    {
      title: 'Edad',
      dataIndex: 'edad',
      key: 'edad',
    },
    {
      title: 'Area',
      dataIndex: 'area',
      key: 'area',
    },
    {
      title: 'Puesto',
      dataIndex: 'puesto',
      key: 'puesto',
    },
    {
      title: 'Accion',
      key: 'accion',
      render: (_, record) => (
        <Space size="medium">
          <Button type="link" onClick={() => onEditar?.(record)}>Edit</Button>
          <Popconfirm
            title="¿Eliminar empleado?"
            description="Esta acción no se puede deshacer."
            onConfirm={() => onEliminar?.(record.id)}
            okText="Sí"
            cancelText="No"
          >
            <Button type="link" danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="id"
      loading={loading}
      pagination={{ pageSize: 10 }}
    />
  );
};

export default TablaEmpleados;
