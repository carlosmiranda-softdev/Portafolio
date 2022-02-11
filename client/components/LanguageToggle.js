import React, { useState, useContext, useEffect } from "react";
import languageContext from "../context/languageContext";

export default function LanguageToggle() {

    const [englishLang, isEnglishLang] = useState(false);
    const { setLanguage } = useContext(languageContext);
    const langTexts = document.getElementsByClassName("lang-text");

    useEffect(() => {
        if (englishLang) {
            setLanguage("en");
        }
        else {
            setLanguage("es");
        }
    }, [englishLang])

    function handleChange(event) {
        isEnglishLang(event.target.checked);
        for(let item of langTexts){
            item.classList.toggle("text-light")
        }
    }

    return (
        <div id="lang-opt" className="flex-style">
            <h3 className="lang-text text-light">Es</h3>
            <input type="checkbox" id="lang-toggle"
                onChange={handleChange} checked={englishLang}
            />
            <h3 className="lang-text">En</h3>
        </div>
    )
}