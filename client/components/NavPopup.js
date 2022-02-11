import React, { useContext } from "react";
import languageContext from "../context/languageContext";

export default function NavPopup() {

    const { setLanguage } = useContext(languageContext);
    const popupItems = document.getElementsByClassName("popup--item");

    function handleClick(event){
        const itemSelected = event.target;
        setLanguage(itemSelected.title);
        
        for(let item of popupItems){
            if(item == itemSelected){
                item.classList.add("nav--active");
            }
            else{
                item.classList.remove("nav--active");
            }
        }
    }

    return (
        <div className="nav-popup">
            <div className="flex-style nav-popup-content green-border-round">
                <h3 className="popup--item nav--active" onClick={handleClick} title="es">
                    Es
                </h3>
                <h3 className="popup--item" onClick={handleClick} title="en">
                    En
                </h3>
            </div>
        </div>
    )
}