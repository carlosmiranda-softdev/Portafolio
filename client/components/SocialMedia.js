import React from "react";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";

export default function SocialMediaIcons() {
    return (
        <div id="social-div" className="flex-style">
            <Link to={{ pathname: "https://linkedin.com/in/mirandadelahozcarlos" }}
                target="blank"
            >
                <AiFillLinkedin className="icon icon-social" />
            </Link>
            <Link to={{ pathname: "https://github.com/CarlosMrnd" }}
                target="blank"
            >
                <AiFillGithub className="icon icon-social" />
            </Link>
            <Link to={{ pathname: "mailto:mirandadelahozcarlos@gmail.com" }}
                target="blank"
            >
                <MdOutlineMail className="icon icon-social" />
            </Link>
        </div>
    )
}