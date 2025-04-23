//Entry point. It's named differently, but this is the index.js file
//from the project.
import "./style.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

//Logic for tab switching buttons. Need a function that wipes existing content.
const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const contactButton = document.querySelector(".contact-button");

//Initial page load module
const homeManage = home();
homeManage.homeLoad(); //initial home load when page starts
addButtonToggledStyle(homeButton);

//Menu and Contact modules
const menuManage = menu();
const contactManage = contact();

//Wipe page function
function wipeCurrentPage() {
    const article = document.querySelector("article");
    article.remove();
}

//Button styling functions
function addButtonToggledStyle(htmlButton) {
    htmlButton.style.backgroundColor = "grey";
    htmlButton.style.color = "white";
}

function resetCurrentButtonStyle(htmlButton) {
    const buttonArr = [homeButton, menuButton, contactButton];

    //Remove current button from list, make evey other button default color
    for (let i = 0; i < buttonArr.length; i++) {
        if (buttonArr[i] === htmlButton) {
            buttonArr.splice(i, 1);
            break;
        }
    }

    buttonArr.forEach(function (element) {
        element.style.backgroundColor = "rgb(233, 184, 48)";
        element.style.color = "black";
    });
}

//Button tab switching logic
/*
When a button is clicked: 
1. wipe current page
2. rebuild new page
3. add the corresponding button the toggled styling 
4. reset the stylings of every other button except the toggled one
*/
homeButton.addEventListener("click", function () {
    wipeCurrentPage();
    homeManage.homeLoad();
    addButtonToggledStyle(homeButton);
    resetCurrentButtonStyle(homeButton);
});

menuButton.addEventListener("click", function () {
    wipeCurrentPage();
    menuManage.menuLoad();
    addButtonToggledStyle(menuButton);
    resetCurrentButtonStyle(menuButton);
});


contactButton.addEventListener("click", function () {
    wipeCurrentPage();
    contactManage.contactLoad();
    addButtonToggledStyle(contactButton);
    resetCurrentButtonStyle(contactButton);
});




