import React from "react";
import { Link } from "react-router-dom";

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
                    <svg className="icon-pro" width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 0C11.1875 0 0 11.4705 0 25.6323C0 36.9747 7.15625 46.5547 17.0938 49.951C18.3438 50.1753 18.8125 49.4063 18.8125 48.7335C18.8125 48.1247 18.7812 46.1062 18.7812 43.9595C12.5 45.145 10.875 42.3895 10.375 40.9477C10.0938 40.2107 8.875 37.9359 7.8125 37.3271C6.9375 36.8465 5.6875 35.661 7.78125 35.629C9.75 35.5969 11.1562 37.4873 11.625 38.2563C13.875 42.1332 17.4687 41.0438 18.9062 40.3709C19.125 38.7048 19.7812 37.5834 20.5 36.9426C14.9375 36.3018 9.125 34.091 9.125 24.2866C9.125 21.4991 10.0938 19.1922 11.6875 17.398C11.4375 16.7571 10.5625 14.1298 11.9375 10.6054C11.9375 10.6054 14.0312 9.93253 18.8125 13.2327C20.8125 12.656 22.9375 12.3676 25.0625 12.3676C27.1875 12.3676 29.3125 12.656 31.3125 13.2327C36.0938 9.90049 38.1875 10.6054 38.1875 10.6054C39.5625 14.1298 38.6875 16.7571 38.4375 17.398C40.0312 19.1922 41 21.4671 41 24.2866C41 34.1231 35.1562 36.3018 29.5937 36.9426C30.5 37.7436 31.2812 39.2816 31.2812 41.6846C31.2812 45.1129 31.25 47.8684 31.25 48.7335C31.25 49.4063 31.7187 50.2074 32.9688 49.951C37.9316 48.2331 42.2441 44.9627 45.2993 40.6003C48.3545 36.2378 49.9985 31.0029 50 25.6323C50 11.4705 38.8125 0 25 0Z" />
                    </svg>
                </Link>
                <Link to={{ pathname: props.demoLink }}
                    target="blank"
                >
                    <svg className="icon-pro" width="140" height="140" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
                        <path d="M124.25 85.5V124.25C124.25 132.81 117.31 139.75 108.75 139.75H15.75C7.18959 139.75 0.25 132.81 0.25 124.25V31.25C0.25 22.6896 7.18959 15.75 15.75 15.75H54.5V31.25H15.75V124.25H108.75V85.5H124.25ZM124.228 26.7102L67.7076 83.2301L56.7474 72.2699L113.267 15.75H77.7275V0.25H139.728V62.25H124.228V26.7102Z" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}