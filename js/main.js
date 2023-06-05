//to top button

window.onscroll = function () {
  let YscrollAxis = document.documentElement.scrollTop;
  let YscrollAxis2 = document.body.scrollTop;
  let topBtn = document.querySelector(".toTopButton");
  if (YscrollAxis > 200 || YscrollAxis2 > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
let topBtn = document.querySelector(".toTopButton");
topBtn.addEventListener("click", (_) => {
  window.scrollBy(0, -1 * document.documentElement.scrollTop);
  window.scrollBy(0, -1 * document.body.scrollTop);
});

//progress bar

const body = document.body;
const bar = document.querySelector(".bar");
const Update = () => {
  let scroll =
    (window.scrollY / (body.scrollHeight - window.innerHeight)) * 100;
  bar.style.width = `${scroll}%`;
  requestAnimationFrame(Update);
};
Update();

//karty
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
        }, index * 200); // Opóźnienie animacji w milisekundach
      }
    })(i);
  }
});

// topic1 przeniesienie
let temat1 = document.querySelector(".topic1");
let holowanie = document.querySelector(".holowanie");

temat1.addEventListener("click", (_) => {
  holowanie.scrollIntoView({ behavior: "smooth" });
});
// topic3 przeniesienie
let temat3 = document.querySelector(".topic3");
let sprzet = document.querySelector(".sprzet");

temat3.addEventListener("click", (_) => {
  sprzet.scrollIntoView({ behavior: "smooth" });
});
