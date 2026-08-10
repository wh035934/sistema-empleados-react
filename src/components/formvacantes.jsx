import React from 'react';
import { Button, Form, Input } from 'antd';
const Formvacantes = () => (
  <Form
    name="wrap"
    labelCol={{ flex: '110px' }}
    labelAlign="left"
    labelWrap
    wrapperCol={{ flex: 1 }}
    colon={false}
    style={{ maxWidth: 600 }}
  >
    <Form.Item label="Nombre vacante" name="nombre" rules={[{ required: true }]}>
      <Input />
    </Form.Item>

    <Form.Item label="Área" name="area" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    
    <Form.Item label="Estado" name="estado" rules={[{ required: true }]}>
      <Input />
    </Form.Item>

    <Form.Item label=" ">
      <Button type="primary" htmlType="submit">
        Agregar Vacante
      </Button>
    </Form.Item>
  </Form>
);
export default Formvacantes;