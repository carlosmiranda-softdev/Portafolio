import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectDetail(props) {

    const styleDiv = {
        position: "absolute",
        top: "85%",
        width: "100%",
        height: "15%",
        background: "linear-gradient(0deg, rgba(0,0,0, 0.4), rgba(0, 0, 0, 0.1))",
        backdropFilter: "blur(10px)",
        borderRadius: "0 0 30px 30px",
        zindex: 1,
        justifyContent: "space-evenly"
    }

    return (
        <div id="project-detail"
            style={{
                background: `${props.background}`, border: `${props.border}`,
                position: "relative"
            }} className="flex-style green-border-round"
        >
            <img src={props.source} alt={props.alt} className="img-resp img-project" />
            <div className="flex-style" style={styleDiv}>
                <div>
                    <h3 className="text-light">{props.title} <br />
                        <span className="text-light">{props.description}</span>
                    </h3>
                </div>
                <Link to={{ pathname: props.githubLink }}
                    target="blank"
                >
                    <AiFillGithub className="icon-pro"/>
                </Link>
                <Link to={{ pathname: props.demoLink }}
                    target="blank"
                >
                    <FiExternalLink className="icon-pro"/>
                </Link>
            </div>
        </div>
    )
}