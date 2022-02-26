import React, { useState, useEffect } from "react";
import ProjectsName from "../components/ProjectNames";
import ProjectDetail from "../components/ProjectDetail";
import { projectInfo } from "../utils/projectInfo";

export default function ProjectPage() {

    const [project, setProject] = useState();
    const [data, setData] = useState("");
    const callbackFunction = (childData) => {
        setProject(childData);
    };

    function searchInfo(projectName) {
        const info = projectInfo.filter(item => item.name === projectName)
        return info;
    }

    useEffect(() => {
        setData(searchInfo(project));
    }, [project]);

    return (
        <section id="project-pg" className="flex-style">
            <ProjectsName
                parentCallback={callbackFunction}
            />
            {
                data.length > 0 &&
                <ProjectDetail
                    background={data[0].info.background}
                    border={data[0].info.border}
                    title={data[0].info.title}
                    source={data[0].info.source}
                    alt={data[0].info.alt}
                    githubLink={data[0].info.github}
                    demoLink={data[0].info.demo}
                />
            }
        </section >
    )
}
