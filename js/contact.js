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


// // topic1 przeniesienie
// let temat1 = document.querySelector(".topic1");
// let temat11 = document.querySelector(".temat1");
// let holowanie = document.querySelector(".holowanie");

// temat1.addEventListener("click", (_) => {
//   holowanie.scrollIntoView({ behavior: "smooth" });
// });
// temat11.addEventListener("click", (_) => {
//   holowanie.scrollIntoView({ behavior: "smooth" });
// });

// // topic2 przeniesienie
// let temat2 = document.querySelector(".topic2");
// let temat22 = document.querySelector(".temat2");
// let wezly = document.querySelector(".wezly-container");

// temat2.addEventListener("click", (_) => {
//   wezly.scrollIntoView({ behavior: "smooth" });
// });
// temat22.addEventListener("click", (_) => {
//   wezly.scrollIntoView({ behavior: "smooth" });
// });

// // topic3 przeniesienie
// let temat3 = document.querySelector(".topic3");
// let temat33 = document.querySelector(".temat3");
// let sprzet = document.querySelector(".sprzet-container");

// temat3.addEventListener("click", (_) => {
//   sprzet.scrollIntoView({ behavior: "smooth" });
// });
// temat33.addEventListener("click", (_) => {
//   sprzet.scrollIntoView({ behavior: "smooth" });
// });



// efekt na kotwicę
let home = document.querySelector(".home-li");
let audio3 = new Audio("../media/kotwica.mp3");
home.addEventListener("mouseover",_=>{
    audio3.play();
});