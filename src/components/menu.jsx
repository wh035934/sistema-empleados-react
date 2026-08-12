import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DesktopOutlined,
  ContainerOutlined,
  PieChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Menu as AntMenu } from 'antd';

const items = [
  { key: '/', icon: <PieChartOutlined />, label: 'Inicio' },
  { key: '/gestion', icon: <DesktopOutlined />, label: 'Gestion' },
  { key: '/vacantes', icon: <ContainerOutlined />, label: 'Vacantes' },
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
    </div>
  );
};

export default Menu;