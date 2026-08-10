import React from 'react';
import { Table } from 'antd';
const columns = [
  { title: 'Nombres', dataIndex: 'nombres', key: 'nombres' },
  Table.EXPAND_COLUMN,
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
  {
    key: 3,
    nombres: 'Juan',
    apellidos: 'Gray',
    address: 'Jiangsu No. 1 Lake Park',
    edad: 29,
    area: 'Sales',
    puesto: 'Sales Associate'
  },
  {
    key: 4,
    nombres: 'Joe',
    apellidos: 'Black',
    edad: 32,
    area: 'Engineering',
    puesto: 'Software Engineer'
  },
];
const TablaInicio = () => (
  <Table
    columns={columns}
    dataSource={data}
  />
);
export default TablaInicio;