import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Select, Row, Col, message, Space } from 'antd';

const Formvacantes = ({ onAgregar, editing, onActualizar, onCancelar }) => {
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
        message.success('Vacante actualizada');
      } else {
        await onAgregar(values);
        form.resetFields();
        message.success('Vacante guardada');
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
        <Space>
          <Button type="primary" htmlType="submit" loading={guardando}>
            {editing ? 'Actualizar Vacante' : 'Agregar Vacante'}
          </Button>
          {editing && <Button onClick={() => { form.resetFields(); onCancelar?.(); }}>Cancelar</Button>}
        </Space>
      </Form.Item>
    </Form>
  );
};

export default Formvacantes;
