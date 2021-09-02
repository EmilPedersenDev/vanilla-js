const heroImg = document.querySelector(".hero");

window.addEventListener("resize", resizeImg);
heroImg.style.height = window.innerHeight + "px";

function resizeImg() {
  heroImg.style.height = window.innerHeight + "px";
}
