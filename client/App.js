import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SkillPage from "./pages/skills";
import HomePage from "./pages/home";
import ProjectPage from "./pages/projects";
import ParticlesContainer from "./components/ParticlesContainer";

export default function App() {

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/skills">
                    <SkillPage />
                </Route>
                <Route exact path="/projects">
                    <ProjectPage />
                </Route>
            </Switch>
            <NavBar />
            <ParticlesContainer />
        </main>
    )
}