export default function handleStyleNav(event) {
    const navElements = document.getElementsByClassName("nav--item");
    const proBtn = document.getElementById("project-btn");
    const navItem = event.target;
    
    for(let element of navElements){
        if(proBtn == navItem){
            navElements[0].classList.add("nav--active");
            navElements[1].classList.remove("nav--active");
        }
        else if(element == navItem || element == navItem.parentElement){
            element.classList.add("nav--active");
        }
        else{
            element.classList.remove("nav--active");
        }
    };
};