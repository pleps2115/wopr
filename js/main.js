// Play audio function
function playAudio(audioName) {
  audioName.play();
}

// Menu options sound effect
const menuOptions = document.querySelectorAll(".menu-option");
const menuOptionsAudio = new Audio("./media/menu-click-sound-effect.wav");
menuOptions.forEach((option) => {
  option.addEventListener("click", () => playAudio(menuOptionsAudio));
});

// Home option sound effect
const home = document.querySelector(".home-li");
const goHomeAudio = new Audio("./media/kotwica.mp3");
home.addEventListener("click", () => playAudio(goHomeAudio));

// topic1 przeniesienie
let temat1 = document.querySelector(".topic1");
let temat11 = document.querySelector(".temat1");
let holowanie = document.querySelector(".holowanie");

temat1.addEventListener("click", (_) => {
  holowanie.scrollIntoView({ behavior: "smooth" });
});
temat11.addEventListener("click", (_) => {
  holowanie.scrollIntoView({ behavior: "smooth" });
});

// topic2 przeniesienie
let temat2 = document.querySelector(".topic2");
let temat22 = document.querySelector(".temat2");
let wezly = document.querySelector(".wezly-container");

temat2.addEventListener("click", (_) => {
  wezly.scrollIntoView({ behavior: "smooth" });
});
temat22.addEventListener("click", (_) => {
  wezly.scrollIntoView({ behavior: "smooth" });
});

// topic3 przeniesienie
let temat3 = document.querySelector(".topic3");
let temat33 = document.querySelector(".temat3");
let sprzet = document.querySelector(".sprzet-container");

temat3.addEventListener("click", (_) => {
  sprzet.scrollIntoView({ behavior: "smooth" });
});
temat33.addEventListener("click", (_) => {
  sprzet.scrollIntoView({ behavior: "smooth" });
});
// topic 4
let temat4 = document.querySelector(".temat4");
temat4.addEventListener("click",_=>{
  window.location.href="./contact/contact.html";
})

// Progress bar
const body = document.body;
const bar = document.querySelector(".bar");
const Update = () => {
  let scroll =
    (window.scrollY / (body.scrollHeight - window.innerHeight)) * 100;
  bar.style.width = `${scroll}%`;
  requestAnimationFrame(Update);
};
Update();

// karty
window.addEventListener("scroll", function () {
  let topics = document.querySelectorAll(".topic");

  for (let i = 0; i < topics.length; i++) {
    (function (index) {
      let topic = topics[index];
      let position = topic.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (position < windowHeight - topic.offsetHeight) {
        setTimeout(function () {
          topic.classList.add("visible");
        }, index * 100);
      }
    })(i);
  }
});

window.addEventListener("scroll", function () {
  let holowanie = document.querySelectorAll(".element");

  for (let i = 0; i <= holowanie.length; i++) {
    (function (index) {
      let holowanieElement = holowanie[index];
      let position = holowanieElement.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (position < windowHeight - holowanieElement.offsetHeight + 300) {
        setTimeout(function () {
          holowanieElement.classList.add("visible");
        }, index * 150);
      } else {
        holowanieElement.classList.remove("visible");
      }
    })(i);
  }
});

window.addEventListener("scroll", function () {
  let sprzet = document.querySelectorAll(".sprzet-element");

  for (let i = 0; i < sprzet.length; i++) {
    (function (index) {
      let sprzetElement = sprzet[index];
      let position = sprzetElement.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (position <= windowHeight - sprzetElement.offsetHeight + 200) {
        setTimeout(function () {
          sprzetElement.classList.add("visible");
        }, index * 100);
      } else {
        sprzetElement.classList.remove("visible");
      }
    })(i);
  }
});

// tematy opacity
window.addEventListener("scroll", (_) => {
  let holowanie = document.querySelector(".holowanie");
  let holowaniePosition = holowanie.getBoundingClientRect();

  let wezly = document.querySelector(".wezly-container");
  let wezlyPosition = wezly.getBoundingClientRect();

  let sprzet = document.querySelector(".sprzet-container");
  let sprzetPosition = sprzet.getBoundingClientRect();

  let wysokosc = window.innerHeight;

  setTimeout((_) => {
    if (wezlyPosition.top <= wysokosc) {
      wezly.style.opacity = "1";
    } else {
      wezly.style.opacity = "0";
    }
  });

  wezly.style.transition = "opacity 3s";
});

// Social media links sound effect
const socialMediaLinks = document.querySelectorAll(".social-media-link");
const socialMediaAudio = new Audio("./media/element-click-sound-effect.wav");
socialMediaLinks.forEach((option) => {
  option.addEventListener("click", () => playAudio(socialMediaAudio));
});
