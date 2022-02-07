import React from "react";

export default function ProjectDetail(props) {

    return (
        <div id="project-detail"
            style={{ background: `${props.background}`, border: `${props.border}` }}
            className="flex-style green-border-round"
        >
            <h3 className="text-light">{props.title}</h3>
            <img src={props.source} alt={props.alt} className="img-resp" />
            <p className="text-light">{props.description}</p>
        </div>
    )
}