import React from 'react';
import { Flex, Space, Table, Tag } from 'antd';
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
    key: 'acccion',
    render: (_, record) => (
      <Space size="medium">
        <a>Modify</a>
        <a style={{ color: 'red' }}>Delete</a>
      </Space>
    ),
  },
];
const TablaEmpleados = ({ data }) => <Table columns={columns} rowSelection={{}} dataSource={data} rowKey="id"/>;
export default TablaEmpleados;