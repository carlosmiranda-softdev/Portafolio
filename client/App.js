import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SkillPage from "./pages/skills";
import HomePage from "./pages/home";
import ProjectPage from "./pages/projects";
import ParticlesContainer from "./components/ParticlesContainer";
import LanguageToggle from "./components/LanguageToggle";
import { LanguageContextProvider } from "./context/languageContext";
import PreloaderScreen from "./components/PreLoader";

export default function App() {

    const [language, setLanguage] = useState("es");
    const values = { language, setLanguage };
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    }, [])

    return (
        <LanguageContextProvider value={values}>
            {isLoading ? <PreloaderScreen /> :
                <main>
                    <Switch>
                        <Route exact path="/Portafolio">
                            <HomePage />
                        </Route>
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
                    <LanguageToggle />
                    <NavBar />
                </main>
            }
            <ParticlesContainer />
        </LanguageContextProvider>
    )
}