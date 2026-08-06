import './menu.css';
import React from 'react';
import useNavigate from 'react-router-dom';
function Menu() {
    const navigate = useNavigate();
    return (
        <>
        <header className="menu">
                <nav>
                <h2>Menú</h2>
                <a href="" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Inicio</a>
                <a href="" onClick={(e) => { e.preventDefault(); navigate('/gestion'); }}>Gestion</a>
            </nav>
        </header>
        </>
    );
}export default Menu