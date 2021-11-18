/*
A simple script to navigate to sections 
using a link item's inner html values.
This feature is more useful during mobile viewing 
*/
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    let targetDiv = document.getElementById(link.innerHTML.toLowerCase()).offsetTop;
    window.scrollTo({top: targetDiv-240, behavior: "smooth"})
  });
});
