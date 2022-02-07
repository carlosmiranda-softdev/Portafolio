import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import SocialMediaIcons from "../components/SocialMedia";
import homePic from "../svg/homePicture.svg";
import handleStyleNav from "../utils/styleNav";

export default function HomePage() {
    return (
        <section id="home-pg" className="flex-style">
            <h1 id="title-home" className="text-light text-center">
                Alcanza tus objetivos con software de calidad
            </h1>
            <div id="img-home" className="green-border-round flex-style">
                <img src={homePic} alt="developer ilustration" className="img-resp" />
            </div>
            <div id="typing-home">
                <h2 id="sub-title-home" className="text-light text-center">Hola, soy</h2>
                <Typewriter className="typing-text"
                    options={{
                        strings: ["Carlos Miranda",
                            "Desarrollador Frontend",
                            "Ingeniero Industrial"
                        ],
                        autoStart: true,
                        loop: true,
                        pauseFor: 1750
                    }}
                />
            </div>
            <SocialMediaIcons />
            <Link to="/projects"
                id="project-btn" className="green-border-round flex-style" onClick={handleStyleNav}
            >Proyectos</Link>
        </section >
    )
}