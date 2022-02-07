import React, { useState, useEffect } from "react";

export default function ProjectsName(props) {

    const [project, setProject] = useState();

    useEffect(() => {
        props.parentCallback(project);
    }, [project]);

    function handleClick(event) {
        const projectSelected = event.target.name;
        setProject(projectSelected);
    }

    return (
        <div id="project-names" className="green-border-round flex-style">
            <h2 className="text-light">Proyectos</h2>
            <div id="project-btns" className="flex-style">
                <div className="flex-style">
                    <a id="typing-btn" name="typing" onClick={handleClick}
                        className="green-border-round flex-style project-name-btn"
                    >Typing app</a>
                    <a id="weather-btn" name="weather" onClick={handleClick}
                        className="green-border-round flex-style project-name-btn"
                    >Weather app</a>
                </div>
                <div className="flex-style">
                    <a id="bored-btn" name="boredbot" onClick={handleClick}
                        className="green-border-round flex-style project-name-btn"
                    >Bored bot</a>
                    <a id="landing-btn" name="landing" onClick={handleClick}
                        className="green-border-round flex-style project-name-btn"
                    >Landing page</a>
                </div>
                <a id="tech-btn" name="technical" onClick={handleClick}
                    className="green-border-round flex-style project-name-btn"
                >Technical doc</a>
            </div>
        </div>
    )
}