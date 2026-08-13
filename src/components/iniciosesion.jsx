import React from 'react';
import { Button, Form, Input, Checkbox, Card, Typography } from 'antd';
import { useNavigate, Link } from 'react-router-dom';

const { Title, Text } = Typography;

const IniciarSesion = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Datos del login:', values);
    navigate('/');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
      }}
    >
      <Title level={2} style={{ marginBottom: 4 }}>¡Bienvenido de nuevo!</Title>
      <Text type="secondary" style={{ marginBottom: 24 }}>
        ¿Aún no tienes una cuenta? <Link to="/registro">Crea una cuenta.</Link>
      </Text>

      <Card style={{ width: 400 }}>
        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Correo electrónico"
            name="email"
            rules={[{ required: true, message: 'Ingresa tu correo' }]}
          >
            <Input placeholder="tu@correo.com" />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: 'Ingresa tu contraseña' }]}
          >
            <Input.Password placeholder="Tu contraseña" />
          </Form.Item>

          <Form.Item>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Acuérdate de mí</Checkbox>
              </Form.Item>
              <Link to="/recuperar">¿Has olvidado tu contraseña?</Link>
            </div>
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Iniciar sesión
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default IniciarSesion;