import React from 'react';
import { Space, Table, Tag } from 'antd';

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
        <a>Modify</a>
        <a style={{ color: 'red' }}>Delete</a>
      </Space>
    ),
  },
];

const TablaVacantes = ({ data }) => <Table columns={columns} dataSource={data} rowKey="id"/>;

export default TablaVacantes;