const Menu = () => {
  const mainContent = document.getElementById("content");
  const contentMenu = document.createElement("div");
  const titleMenu = document.createElement("h1");

  titleMenu.innerText = "MENÙ";

  mainContent.appendChild(contentMenu);
  mainContent.appendChild(titleMenu);
};

export default Menu;
