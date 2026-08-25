import React from 'react';
import { Button, Form, Input, Select } from 'antd';

const Registro = ({ onAgregar }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onAgregar(values);
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Nombre"
        name="nombre"
        rules={[{ required: true, message: 'Ingresa el nombre' }]}
      >
        <Input placeholder="Nombre completo" />
      </Form.Item>

      <Form.Item
        label="Correo electrónico"
        name="correo"
        rules={[{ required: true, message: 'Ingresa el correo' }]}
      >
        <Input placeholder="correo@empresa.com" />
      </Form.Item>

      <Form.Item
        label="Área"
        name="area"
        rules={[{ required: true, message: 'Selecciona un área' }]}
      >
        <Select
          placeholder="Selecciona"
          options={[
            { value: 'Administrativa', label: 'Administrativa' },
            { value: 'Sistemas', label: 'Sistemas' },
            { value: 'Recursos Humanos', label: 'Recursos Humanos' },
            { value: 'Marketing', label: 'Marketing' },
            { value: 'Contabilidad', label: 'Contabilidad' },
          ]}
        />
      </Form.Item>
      <Form.Item
        label="Rol"
        name="rol"
        rules={[{ required: true, message: 'Selecciona un rol' }]}
      >
        <Select
          placeholder="Selecciona"
          options={[
            { value: 'Administrador', label: 'Administrador' },
            { value: 'Empleado', label: 'Empleado' },
          ]}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Crear Usuario
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Registro;