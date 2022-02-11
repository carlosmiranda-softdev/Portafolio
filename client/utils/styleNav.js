export default function handleStyleNav(event) {
    const navElements = document.getElementsByClassName("nav--item");
    const navDesk = document.getElementsByClassName("nav-des--item");
    const proBtn = document.getElementById("project-btn");
    const navItem = event.target;

    for (let element of navElements) {
        if (proBtn == navItem) {
            navElements[0].classList.add("nav--active");
            navElements[1].classList.remove("nav--active");
        }
        else if (element == navItem || element == navItem.parentElement) {
            element.classList.add("nav--active");
        }
        else {
            element.classList.remove("nav--active");
        }
    };

    for (let item of navDesk) {
        if (proBtn == navItem) {
            navDesk[0].classList.remove("nav--active");
            navDesk[1].classList.add("nav--active");
        }
        else if (item == navItem) {
            item.classList.add("nav--active");
        }
        else {
            item.classList.remove("nav--active");
        }
    }

};