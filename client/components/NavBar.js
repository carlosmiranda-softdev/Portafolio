import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { IoBagSharp, IoLanguage } from "react-icons/io5";
import { GiBrain } from "react-icons/gi";
import handleStyleNav from "../utils/styleNav";
import languageContext from "../context/languageContext";
import handleLanguage from "../utils/languageHandle";
import NavPopup from "./NavPopup";

export default function NavBar() {

    const { language } = useContext(languageContext);
    const [showPopup, setShowPopup] = useState(false);
    const data = handleLanguage(language);

    function handleClick(){
        setShowPopup(prevState => !prevState);
        const languageIcon = document.getElementById("nav-lang-btn");
        languageIcon.classList.toggle("nav--active");
    }

    return (
        <div>
            {screen.width < 500 &&
                <nav id="nav-mob" className="flex-style green-border-round">
                    <Link to="/projects">
                        <IoBagSharp className="nav--item" onClick={handleStyleNav} />
                    </Link>
                    <Link to="/">
                        <AiFillHome className="nav--item nav--active" onClick={handleStyleNav} />
                    </Link>
                    <Link to="/skills">
                        <GiBrain className="nav--item" onClick={handleStyleNav} />
                    </Link>
                    <IoLanguage id="nav-lang-btn" className="nav--item" onClick={handleClick}/>
                    {showPopup && <NavPopup />}
                </nav>
            }
            {screen.width >= 1000 &&
                <nav id="nav-des" className="flex-style">
                    <Link to="/" className="nav-des--item text-center nav--active" onClick={handleStyleNav}>
                        {data[0].content.navInicio}
                    </Link>
                    <Link to="/projects" className="nav-des--item text-center" onClick={handleStyleNav}>
                        {data[0].content.navProjects}
                    </Link>
                    <Link to="/skills" className="nav-des--item text-center" onClick={handleStyleNav}>
                        {data[0].content.navSkills}
                    </Link>
                </nav>
            }
        </div>
    )
}