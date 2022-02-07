import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "../utils/particlesConfig";

export default function ParticlesContainer() {
    return (
        <Particles id="tsparticles" options={particlesConfig} />
    )
}