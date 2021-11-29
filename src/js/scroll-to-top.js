document.addEventListener("scroll", handleScroll);

const scrollToTopBtn = document.querySelector(".scroll-to-top");

function handleScroll() {
  let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const GOLDEN_RATIO = 0.1;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    
    scrollToTopBtn.style.display = "block";
  } else {
    
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}