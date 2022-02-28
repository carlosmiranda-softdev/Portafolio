import React from "react";

export default function ContainerSkills(props) {
    return (
        <div className="skill-div flex-style">
            <img className="icon img-resp" src={props.src} alt={props.alt}/>
            <p className="text-light">{props.name}</p>
        </div>
    )
}