// String replace
const roles = [
  "building and optimizing websites", 
  "in UX and Graphic Design", 
  "designing and building apps", 
  "managing teams", 
  "owning projects"];
let i = 0;
const role = document.getElementById("role");

function changeText() {
  role.classList.add("fade-out");

  setTimeout(() => {
    role.textContent = roles[i];
    i = (i + 1) % roles.length;

    role.classList.remove("fade-out");
  }, 300);
}
setInterval(changeText, 2000);

// Menu
const buttons = document.querySelectorAll(".burger-menu");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
  });
});

const ham = document.querySelector('#burger-menu');
const menu = document.querySelector('#nav-menu');

ham.addEventListener('click', () => {
  ham.classList.toggle('active');
  menu.classList.toggle('active');
});

// back to top
const backToTopBtn = document.getElementById("backToTopBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

function scrollToTopFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }

