const allImg = document.querySelectorAll(".img-wrapper");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const slideWidth = allImg[0].getBoundingClientRect().width;

allImg.forEach((img, i) => {
  img.style.left = slideWidth * i + "px";
});

// let currentImgShowingIndex = 0;

const getPrevImg = () => {
  // if (currentImgShowingIndex === 0) return;
  // allImg[currentImgShowingIndex].classList.remove("active");
  // allImg[currentImgShowingIndex - 1].classList.add("active");
  // currentImgShowingIndex -= 1;
};

const getNextImg = () => {
  const activeSlide = document.querySelector(".active");
  const nextSlide = activeSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;

  console.log(amountToMove);

  activeSlide.style.transform = "translateX(-" + amountToMove + ")";
  nextSlide.style.transform = "translateX(-" + amountToMove + ")";
  activeSlide.classList.remove("active");
  nextSlide.classList.add("active");

  // if (currentImgShowingIndex === allImg.length - 1) return;

  // allImg[currentImgShowingIndex].classList.remove("active");

  // allImg[currentImgShowingIndex + 1].classList.add("active");

  // currentImgShowingIndex += 1;
};

prevBtn.addEventListener("click", getPrevImg);
nextBtn.addEventListener("click", getNextImg);
