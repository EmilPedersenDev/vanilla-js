const observableEl = document.querySelector(".observable");
const progressBar = document.querySelector(".progress__bar");

const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    observableEl.classList.add("show");
  }
});

const getProgress = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  progressBar.style.width = scrolled + "%";
};

window.addEventListener("scroll", getProgress);

observer.observe(observableEl);
