import React from 'react';
import { Table } from 'antd';
const columns = [
  { title: 'Nombres', dataIndex: 'nombres', key: 'nombres' },
  { title: 'Apellidos', dataIndex: 'apellidos', key: 'apellidos' },
  { title: 'Edad', dataIndex: 'edad', key: 'edad' },
  { title: 'Area', dataIndex: 'area', key: 'area' },
  { title: 'Puesto', dataIndex: 'puesto', key: 'puesto' },
];
const data = [
  {
    key: 1,
    nombres: 'John',
    apellidos: 'Brown',
    edad: 32,
    area: 'Engineering',
    puesto: 'Software Engineer'
  },
  {
    key: 2,
    nombres: 'Jim',
    apellidos: 'Green',
    edad: 42,
    area: 'Marketing',
    puesto: 'Marketing Specialist'
  },
];
const TablaInicio = ({ data }) => (
  <Table
    columns={columns}
    dataSource={data}
  />
);
export default TablaInicio;