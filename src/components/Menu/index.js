import React from "react";
import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";
import './style.css'
import Button from "../Button";

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt="Comedyflix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;