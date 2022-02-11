import React, { createContext } from "react";

const languageContext = createContext({
    language: "",
    setLanguage: () => { }
});

export const LanguageContextProvider = languageContext.Provider

export default languageContext;