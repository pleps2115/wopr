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

// efekt na kotwicę
let home = document.querySelector(".home-li");
let audio3 = new Audio("../media/kotwica.mp3");
home.addEventListener("mouseover", (_) => {
  audio3.play();
});



