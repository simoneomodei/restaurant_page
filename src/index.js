import _ from "lodash";
import "./styles.css";

// Import all the modules needed
import Homepage from "./homepage";
import Menu from "./menu";
import AboutUs from "./about-us";

// Create the navbar to navigate between tabs
function NavBar() {
  const navBar = document.createElement("div");
  navBar.classList.add("navbar");

  const mainContent = document.getElementById("content");
  mainContent.appendChild(navBar);

  // Create tab buttons
  const tabHome = document.createElement("button");
  const tabMenu = document.createElement("button");
  const tabAboutUs = document.createElement("button");

  tabHome.innerText = "HOME";
  tabMenu.innerText = "MENÙ";
  tabAboutUs.innerText = "ABOUT US";

  navBar.appendChild(tabHome);
  navBar.appendChild(tabMenu);
  navBar.appendChild(tabAboutUs);

  tabHome.addEventListener("click", () => {
    mainContent.innerHTML = "";
    NavBar();
    Homepage();
    console.log("Homepage");
  });

  tabMenu.addEventListener("click", () => {
    mainContent.innerHTML = "";
    NavBar();
    Menu();
    console.log("Menu");
  });

  tabAboutUs.addEventListener("click", () => {
    mainContent.innerHTML = "";
    NavBar();
    AboutUs();
    console.log("About Us");
  });
}

NavBar();
Homepage();
