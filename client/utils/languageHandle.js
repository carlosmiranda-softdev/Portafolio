import { appTexts } from "./appContent";

export default function handleLanguage(language){
    const data = appTexts.filter(item=>item.language === language)
    return data;
}