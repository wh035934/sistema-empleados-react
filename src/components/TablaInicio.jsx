import React from 'react';
import { Table } from 'antd';
const columns = [
  { title: 'Nombres', dataIndex: 'nombres', key: 'nombres' },
  { title: 'Apellidos', dataIndex: 'apellidos', key: 'apellidos' },
  { title: 'Edad', dataIndex: 'edad', key: 'edad' },
  { title: 'Area', dataIndex: 'area', key: 'area' },
  { title: 'Puesto', dataIndex: 'puesto', key: 'puesto' },
];

const TablaInicio = ({ data }) => (
  <Table
    columns={columns}
    dataSource={data}
    rowKey="id"
  />
);
export default TablaInicio;