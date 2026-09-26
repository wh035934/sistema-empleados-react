import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Select, Row, Col, message, Space } from 'antd';

const Formempleado = ({ onAgregar, editing, onActualizar, onCancelar }) => {
  const [form] = Form.useForm();
  const [guardando, setGuardando] = useState(false);

  useEffect(() => {
    if (editing) form.setFieldsValue(editing);
    else form.resetFields();
  }, [editing, form]);

  const onFinish = async (values) => {
    setGuardando(true);
    try {
      if (editing) {
        await onActualizar(editing.id, values);
        message.success('Empleado actualizado');
      } else {
        await onAgregar(values);
        form.resetFields();
        message.success('Empleado guardado');
      }
    } catch {
      // el error ya se muestra en App.jsx
    } finally {
      setGuardando(false);
    }
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
            <Space style={{ width: '100%' }}>
              <Button type="primary" htmlType="submit" block loading={guardando}>
                {editing ? 'Actualizar Empleado' : 'Agregar Empleado'}
              </Button>
              {editing && <Button onClick={() => { form.resetFields(); onCancelar?.(); }}>Cancelar</Button>}
            </Space>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default Formempleado;
