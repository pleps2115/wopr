// Back to top button
const button = document.querySelector(".back-to-top-button");

window.onscroll = () => {
  showButtonOnScroll();
};

function showButtonOnScroll() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    button.style.visibility = "visible";
    button.style.opacity = "1";
  } else {
    button.style.opacity = "0";
    button.style.visibility = "hidden";
  }
}

button.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
