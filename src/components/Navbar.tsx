import React from 'react';
import {NavLink} from "react-router-dom"

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper blue lighten-1 px1">
      <a href="/" className="brand-logo">My Todo List</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/">Список на день справ</NavLink></li>
        <li><NavLink to="/week">Список тиждень справ</NavLink></li>
        <li><NavLink to="/longterm">Довготривалі справи</NavLink></li>
        <li><NavLink to="/blog">Блог</NavLink></li>
      </ul>
    </div>
  </nav>
);
