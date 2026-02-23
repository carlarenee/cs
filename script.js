const observer = new IntersectionObserver((entries)=> {
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show")
    }else{
      entry.target.classList.remove("show")
    }
  })
}, {})
const workElements = document.querySelectorAll(".work")
workElements.forEach(el => observer.observe(el))

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
