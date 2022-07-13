const AboutUs = () => {
  const mainContent = document.getElementById("content");
  const contentAboutUs = document.createElement("div");
  const titleAboutUs = document.createElement("h1");

  titleAboutUs.innerText = "ABOUT US";

  mainContent.appendChild(contentAboutUs);
  mainContent.appendChild(titleAboutUs);
};

export default AboutUs;
