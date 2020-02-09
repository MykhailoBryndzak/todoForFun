import React from 'react';
import {NavLink} from "react-router-dom"

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper blue lighten-1 px1">
            <a href="/" className="brand-logo">React + TS</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Список справ</NavLink></li>
                <li><NavLink to="/about">Інформація</NavLink></li>
            </ul>
        </div>
    </nav>
)
