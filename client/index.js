import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./style.css";

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);

/*
particles https://www.youtube.com/watch?v=ordgGUgd2P0
glassmorphim https://blog.logrocket.com/how-to-create-glassmorphism-effect-react/
*/