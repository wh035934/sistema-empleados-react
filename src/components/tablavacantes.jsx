import React from 'react';
import { Flex, Space, Table, Tag } from 'antd';
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
    render: (_, { estado }) => (
      <Flex gap="small" align="center" wrap>
        {estado.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'urgente') {
            color = 'revision';
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
const data = [
  {
    key: '1',
    nombre: 'Desarrollador Web',
    area: 'Engineering',
    estado: ['activa'],
  },
  {
    key: '2',
    nombre: 'Diseñador Gráfico',
    area: 'Design',
    estado: ['Urgente'],
  },
  {
    key: '3',
    nombre: 'Asistente Administrativo',
    area: 'Administration',
    estado: ['Revision'],
  },
];
const TablaVacantes = () => <Table columns={columns}    rowSelection={{}} dataSource={data} />;
export default TablaVacantes;