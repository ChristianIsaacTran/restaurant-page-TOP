//Entry point. It's named differently, but this is the index.js file
//from the project.
import "./style.css";
import home from "./home.js";
import menu from "./menu.js";

//Initial page load module
const homeManage = home();
// homeManage.homeLoad();
const menuManage = menu();
menuManage.menuLoad();




