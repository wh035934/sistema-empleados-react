import './menu.css';
import React from 'react';
import { Link } from "react-router-dom";
function Menu() {

    return (
        <>
        <header className="menu">
                <nav>
                <h2>Menú</h2>
                <Link to="/">Inicio</Link>
                <Link to="/gestion">Gestion</Link>
            </nav>
        </header>
        </>
    );
}
export default Menu;