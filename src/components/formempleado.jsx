import React from 'react';
import { Button, Form, Input, Select, Row, Col } from 'antd';

const Formempleado = ({ onAgregar }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onAgregar(values);
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="Nombres" name="nombres" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Apellidos" name="apellidos" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Edad" name="edad" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="Área" name="area" rules={[{ required: true }]}>
            <Select
              placeholder="Selecciona"
              options={[
                { value: 'sistemas', label: 'sistemas' },
                { value: 'marketing', label: 'marketing' },
                { value: 'administracion', label: 'administracion' },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Puesto" name="puesto" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={8} style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Form.Item style={{ width: '100%' }}>
            <Button type="primary" htmlType="submit" block>
              Agregar Empleado
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default Formempleado;