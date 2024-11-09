function navToggles() {
  let menu = document.querySelector(".togglenav");

  let navToggle = document.querySelector(".toggle");

  let nav = true;

  menu.addEventListener("click", () => {
    navToggle.style.display = "block";

    if (nav === true) {
      menu.classList.remove("ri-menu-line");
      menu.classList.add("ri-close-line");
      nav = false;
    } else {
      menu.classList.remove("ri-close-line");
      menu.classList.add("ri-menu-line");
      navToggle.style.display = "none";
      nav = true;
    }
    // menu.classList.remove("ri-menu-line")
    // menu.classList.add("ri-close-line");
  });
}

navToggles();

let autoslides = document.querySelector(".autoSlides");
let autoSlides2 = document.querySelector(".autoSlides2");

let second = document.querySelector(".second");

let sliding = document.querySelector(".sliding");

let sectionSlide = () => {
  setInterval(function() {
    autoslides.style.transform = "translateX(0%)";
    autoSlides2.style.transform = "translateX(220%)";
    autoslides.style.transitionDuration = ".8s";
    autoSlides2.style.transitionDuration = "0s";
    sliding.classList.add("slider1")
  }, 3000);
  setInterval(function() {
    autoSlides2.style.transform = "translateX(0%)";
    autoSlides2.style.transitionDuration = ".8s"
    autoslides.style.transform = "translateX(220%)";
    autoslides.style.transitionDuration = "0s";
  }, 6000);

}

sectionSlide();


second.addEventListener("click", () => {
    autoslides.style.transform = "translateX(0%)";
  
})





