import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DesktopOutlined,
  ApartmentOutlined,
  UserOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Menu as AntMenu } from 'antd';

const items = [
  { key: '/', icon: <HomeOutlined />, label: 'Inicio' },
  { key: '/gestion', icon: <ApartmentOutlined />, label: 'Gestion' },
  { key: '/vacantes', icon: <DesktopOutlined />, label: 'Vacantes' },
  { key: '/Usuario', icon: <UserOutlined />, label: 'Usuario' },
];


const Menu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleClick = ({ key }) => {
    navigate(key);
  };
  const handleLogout = () => {
  navigate('/login');
  };

  return (
    <div
      style={{
        width: collapsed ? 80 : 256,
        minHeight: '100vh',
        backgroundColor: '#001529',
        transition: 'width 0.2s',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'space-between',
          padding: '16px',
        }}
      >
        {!collapsed && (
          <h2 style={{ color: 'white', margin: 0 }}>Menú</h2>
        )}
        <Button
          type="primary"
          onClick={toggleCollapsed}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>

      <AntMenu
        defaultSelectedKeys={['/']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onClick={handleClick}
      />
      <div style={{ padding: '16px' }}>
        <Button type="primary" danger onClick={handleLogout} block icon={<LogoutOutlined />}>
          {!collapsed && 'Cerrar Sesión'}
        </Button>
      </div>
    </div>
  );
};

export default Menu;