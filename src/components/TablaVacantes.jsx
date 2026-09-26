import React from 'react';
import { Space, Table, Tag, Popconfirm, Button } from 'antd';

const TablaVacantes = ({ data, loading, onEliminar, onEditar }) => {
  const columns = [
    {
      title: 'Nombre de la Vacante',
      dataIndex: 'nombre',
      key: 'nombre',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Área',
      dataIndex: 'area',
      key: 'area',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Estado',
      key: 'estado',
      dataIndex: 'estado',
      render: (estado) => {
        if (!estado) return null;
        let color = estado.length > 5 ? 'geekblue' : 'green';
        if (estado === 'urgente') {
          color = 'volcano';
        }
        return <Tag color={color}>{estado.toUpperCase()}</Tag>;
      },
    },
    {
      title: 'Accion',
      key: 'accion',
      render: (_, record) => (
        <Space size="medium">
          <Button type="link" onClick={() => onEditar?.(record)}>Edit</Button>
          <Popconfirm
            title="¿Eliminar vacante?"
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
    <Table columns={columns} dataSource={data} rowKey="id" loading={loading} pagination={{ pageSize: 10 }} />
  );
};

export default TablaVacantes;
