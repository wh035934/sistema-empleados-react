import React from 'react';
import { Flex, Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Vacant Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Estado',
    key: 'estado',
    dataIndex: 'estado',
    render: (_, { estado }) => (
      <Flex gap="small" align="center" wrap>
        {estado.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'kawaii') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </Flex>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="medium">
        <a>Modify</a>
        <a style={{ color: 'red' }}>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'Desarrollador Web',
    estado: ['activa'],
  },
  {
    key: '2',
    name: 'Diseñador Gráfico',
    estado: ['desactivada'],
  },
  {
    key: '3',
    name: 'Asistente Administrativo',
    estado: ['activa'],
  },
];
const TablaVacantes = () => <Table columns={columns}    rowSelection={{}} dataSource={data} />;
export default TablaVacantes;