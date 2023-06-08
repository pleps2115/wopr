// progress bar
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

window.addEventListener("scroll", function(){
  let holowanie = document.querySelectorAll(".element");
  
  for (let i = 0; i <= holowanie.length; i++) {
    (function (index) {
      let holowanieElement = holowanie[index];
      let position = holowanieElement.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (position < windowHeight - holowanieElement.offsetHeight) {
        setTimeout(function () {
          holowanieElement.classList.add("visible");
        }, index * 150); 
      }
      else{
        holowanieElement.classList.remove("visible");
      }
    })(i);
  }
});

window.addEventListener("scroll", function(){
  let sprzet = document.querySelectorAll(".sprzet-element");
  
  for (let i = 0; i < sprzet.length; i++) {
    (function (index) {
      let sprzetElement = sprzet[index];
      let position = sprzetElement.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (position <= windowHeight - sprzetElement.offsetHeight) {
        setTimeout(function () {
          sprzetElement.classList.add("visible");
        }, index * 100); 
      }
      else{
        sprzetElement.classList.remove("visible");
      }
    })(i);
  }
});

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

//tematy opacity 
window.addEventListener("scroll",_=>{
  let holowanie = document.querySelector(".holowanie");
  let holowaniePosition = holowanie.getBoundingClientRect();

  let wezly = document.querySelector(".wezly-container");
  let wezlyPosition = wezly.getBoundingClientRect();

  let sprzet = document.querySelector(".sprzet-container");
  let sprzetPosition = sprzet.getBoundingClientRect();

  let wysokosc = window.innerHeight;

  setTimeout(_=>{
    if(wezlyPosition.top <= wysokosc){
      wezly.style.opacity = "1";
    }
    else{
      wezly.style.opacity = "0";
    }
  });

wezly.style.transition = "opacity 3s";
});


// efekt na kotwicę
let home = document.querySelector(".home-li");
let audio = new Audio("./media/kotwica.mp3");
home.addEventListener("mouseover",_=>{
  audio.play();
});