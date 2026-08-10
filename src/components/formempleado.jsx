import React from 'react';
import { Button, Form, Input } from 'antd';
const Formempleado = () => (
  <Form
    name="wrap"
    labelCol={{ flex: '110px' }}
    labelAlign="left"
    labelWrap
    wrapperCol={{ flex: 1 }}
    colon={false}
    style={{ maxWidth: 600 }}
  >
    <Form.Item label="Nombres" name="nombres" rules={[{ required: true }]}>
      <Input />
    </Form.Item>

    <Form.Item label="Apellidos" name="apellidos" rules={[{ required: true }]}>
      <Input />
    </Form.Item>

    <Form.Item label="Edad" name="edad" rules={[{ required: true }]}>
      <Input />
    </Form.Item>

    <Form.Item label="Área" name="area" rules={[{ required: true }]}>
      <Input />
    </Form.Item>

    <Form.Item label="Puesto" name="puesto" rules={[{ required: true }]}>
      <Input />
    </Form.Item>

    <Form.Item label=" ">
      <Button type="primary" htmlType="submit">
        Agregar Empleado
      </Button>
    </Form.Item>
  </Form>
);
export default Formempleado;