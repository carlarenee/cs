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

// Run every 2 seconds
setInterval(changeText, 2000);

// Intersection Observer Load
// const observer = new IntersectionObserver((entries)=> {
//   entries.forEach((entry)=>{
//     if(entry.isIntersecting){
//       entry.target.classList.add("show")
//     }else{
//       entry.target.classList.remove("show")
//     }
//   })
// }, {})
// const workElements = document.querySelectorAll(".work")
// workElements.forEach(el => observer.observe(el))

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
