const navToggle = document.querySelector(".nav-toggle");

const navLinks = document.querySelectorAll(".nav__link")
//creates a node list of all nav links

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
})

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  })
})
//loops through nav list nodes and adds an event listener for each one.
