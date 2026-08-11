import React from 'react';
import { Button, Form, Input, Select, Row, Col } from 'antd';

const Formvacantes = ({ onAgregar }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onAgregar(values);
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="Nombre vacante" name="nombre" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
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
          <Form.Item label="Estado" name="estado" rules={[{ required: true }]}>
            <Select
              placeholder="Selecciona"
              options={[
                { value: 'activa', label: 'Activa' },
                { value: 'urgente', label: 'Urgente' },
                { value: 'pausada', label: 'Pausada' },
                { value: 'cerrada', label: 'Cerrada' },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Agregar Vacante
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Formvacantes;