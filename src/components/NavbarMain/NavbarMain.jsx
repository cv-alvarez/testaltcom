import React from "react";
import "./index.css";
import logo from "../../assets/img/LOGO.jpg";
import HoverMenu from "../Hovermenu/HoverMenu";
import { Link } from "react-router-dom";

const NavbarMain = () => {
  return (
    <nav className="navbar  navbar-expand-lg bg-body-tertiary">
      <div className="container ">
        <a className="navbar-brand " href="/">
          <img src={logo} className="main_logo" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Inicio
              </Link>
            </li>
            <div className="test">
              <li className="nav-item">
                <a className="nav-link hover_catalogo " href="#">
                  Categorías
                </a>
                <HoverMenu />
              </li>
            </div>
            <li className="nav-item">
              <Link to="/contactanos" className="nav-link active">
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
