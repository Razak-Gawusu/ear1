const navButton = document.querySelector(".nav--menu");
const nav = document.querySelector(".nav");
const footerNav = document.querySelector('.footer__nav')

navButton.addEventListener("click", () => {
  console.log("nav button clicked");
  if (nav.style.display === "block") {
    nav.style.display = "none";
    navButton.setAttribute("src", "./images/list.svg");
  } else {
    nav.style.display = "block";
    navButton.setAttribute("src", "./images/x.svg");
  }
});

const scrollToTarget = (e) => {
  console.log(e);
  e.preventDefault();
  const link = e.target.getAttribute("href");
  document.querySelector(link).scrollIntoView({ behavior: "smooth" });
  nav.style.display = "none";
  navButton.setAttribute("src", "./images/list.svg");
};

nav.addEventListener("click", scrollToTarget);
footerNav.addEventListener('click', scrollToTarget);
