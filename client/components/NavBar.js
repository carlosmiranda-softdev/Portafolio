import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineGlobal } from "react-icons/ai";
import { IoBagSharp } from "react-icons/io5";
import handleStyleNav from "../utils/styleNav";

export default function NavBar() {

    return (
        <div>
            <nav id="nav-mob" className="flex-style green-border-round">
                <Link to="/projects">
                    <IoBagSharp className="nav--item" onClick={handleStyleNav} />
                </Link>
                <Link to="/">
                    <AiFillHome className="nav--item nav--active" onClick={handleStyleNav} />
                </Link>
                <Link to="/skills">
                    <AiOutlineGlobal className="nav--item" onClick={handleStyleNav} />
                </Link>
            </nav>
            <nav id="nav-des" className="flex-style">
                <Link to="/" className="nav-des--item text-center">Inicio</Link>
                <Link to="/projects" className="nav-des--item text-center">Proyectos</Link>
                <Link to="/skills" className="nav-des--item text-center">Habilidades</Link>
            </nav>
        </div>
    )
}