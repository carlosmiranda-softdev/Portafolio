import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import SocialMediaIcons from "../components/SocialMedia";
import homePic from "../svg/homePicture.svg";
import handleStyleNav from "../utils/styleNav";
import languageContext from "../context/languageContext";
import handleLanguage from "../utils/languageHandle";

export default function HomePage() {

    const { language } = useContext(languageContext);
    const data = handleLanguage(language);

    return (
        <section id="home-pg" className="flex-style">
            <h1 id="title-home" className="text-light text-center">
                {data[0].content.homeTitle}
            </h1>
            <div id="img-home" className="green-border-round flex-style">
                <img src={homePic} alt="developer ilustration" className="img-resp" />
            </div>
            <div id="typing-home">
                <h2 id="sub-title-home" className="text-light text-center">
                    {data[0].content.homeSubtitle}</h2>
                <Typewriter className="typing-text"
                    options={{
                        strings: ["Carlos Miranda",
                            data[0].content.typpingOp2,
                            data[0].content.typpingOp3
                        ],
                        autoStart: true,
                        loop: true,
                        pauseFor: 1750
                    }}
                />
            </div>
            <SocialMediaIcons />
            <Link to="/projects"
                id="project-btn" className="green-border-round flex-style"
                onClick={handleStyleNav}>
                {data[0].content.projectBtn}
            </Link>
        </section >
    )
}