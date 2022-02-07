import React from "react";

export default function ContainerSkills(props) {
    return (
        <div className="skill-div flex-style">
            {props.icon}
            <p className="text-light">{props.name}</p>
        </div>
    )
}