// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Background image URLs
const bgUrls = [
  "images/backgrounds/bg1.jpg",
  "images/backgrounds/bg2.jpg",

];

// Select all sections and their .background divs
const sections = document.querySelectorAll(".section");

sections.forEach((section, index) => {
  const bgDiv = section.querySelector(".background");
  bgDiv.style.backgroundImage = `url('${bgUrls[index]}')`;
});

// Parallax scrolling effect
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  sections.forEach((section, index) => {
    const bgDiv = section.querySelector(".background");
    const offsetTop = section.offsetTop;
    const height = section.offsetHeight;

    // Only move background if section is in view
    if (scrollTop + window.innerHeight > offsetTop && scrollTop < offsetTop + height) {
      const progress = (scrollTop + window.innerHeight - offsetTop) / (window.innerHeight + height);

      // Move the background down smoothly (adjust 50 for more movement)
      bgDiv.style.transform = `translateY(${progress * 50}px)`;
    }
  });
});
