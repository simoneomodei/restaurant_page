const Homepage = () => {
  const mainContentHome = document.getElementById("content");

  // Create elements to append
  const imgHero = document.createElement("img");
  const titleHero = document.createElement("h1");
  const copyHero = document.createElement("div");

  // Add classes to the created elements
  imgHero.classList.add("hero-img");
  titleHero.classList.add("title");
  copyHero.classList.add("hero-copy");

  // Set attributes and text for every elements
  imgHero.src = "../src/hero.jpg";
  titleHero.innerText = "The Insect Restaurant";
  copyHero.innerText = `Welcome to The Insect Restaurant!
This is the first restaurant that serves all types of dishes reinvented
in insect mode`;

  // Append elements to the DOM
  mainContentHome.appendChild(imgHero);
  mainContentHome.appendChild(titleHero);
  mainContentHome.appendChild(copyHero);
};

export default Homepage;
