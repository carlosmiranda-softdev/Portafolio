import React, { useContext } from "react";
import languageContext from "../context/languageContext";
import handleLanguage from "../utils/languageHandle";
import ContainerSkills from "../components/ContainerSkill";
import PythonIcon from "../images/python.png";
import JavaIcon from "../images/java1.png";
import JavaScriptIcon from "../images/js.png";
import ReactIcon from "../images/react.png";
import D3Icon from "../images/d3.png";
import DjangoIcon from "../images/django.png";
import KivyIcon from "../images/kivy.png";
import SqliteIcon from "../images/sqlite.png";
import MongoIcon from "../images/mongodb.png";
import NodeIcon from "../images/node.png";
import GitIcon from "../images/git.png";
import HtmlIcon from "../images/html.png";
import CssIcon from "../images/css.png";

export default function SkillPage() {

    const { language } = useContext(languageContext);
    const data = handleLanguage(language);

    return (
        <section id="skill-pg" className="flex-style">
            <div className="skill-container flex-style">
                <h2 className="text-center">{data[0].content.skillTitle1}</h2>
                <div className="flex-style skill-row">
                    <ContainerSkills src={PythonIcon} name="Python" alt="Python icon" />
                    <ContainerSkills src={JavaIcon} name="Java" alt="Java icon" />
                    <ContainerSkills src={JavaScriptIcon} name="JavaScript" alt="JavaScript icon" />
                </div>
                <h2 className="text-center">{data[0].content.skillSubtitle1}</h2>
                <div className="flex-style skill-row">
                    <ContainerSkills src={ReactIcon} name="React Js" alt="React Js icon" />
                    <ContainerSkills src={D3Icon} name="D3 Js" alt="D3 Js icon" />
                </div>
            </div>
            <div className="skill-container flex-style">
                <h2 className="text-center">{data[0].content.skillTitle2}</h2>
                <div className="flex-style skill-row">
                    <ContainerSkills src={DjangoIcon} name="Django" alt="Django icon" />
                    <ContainerSkills src={KivyIcon} name="Kivy" alt="Kivy icon" />
                </div>
                <h2 className="text-center">{data[0].content.skillSubtitle2}</h2>
                <div className="flex-style skill-row">
                    <ContainerSkills src={SqliteIcon} name="SQLite" alt="SQLite icon" />
                    <ContainerSkills src={MongoIcon} name="MongoDB" alt="MongoDB icon" />
                </div>
            </div>
            <div id="others-div" className="flex-style">
                <h2 className="text-light text-center">{data[0].content.skillTitle3}</h2>
                <div className="flex-style">
                    <ContainerSkills src={NodeIcon} name="Node Js" alt="Node Js icon" />
                    <ContainerSkills src={GitIcon} name="Git" alt="Git icon" />
                    <ContainerSkills src={HtmlIcon} name="Html" alt="Html icon" />
                    <ContainerSkills src={CssIcon} name="Css" alt="Css icon" />
                </div>
            </div>
        </section>
    )
}