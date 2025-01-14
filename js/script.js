//Hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const experienceBoxes = document.querySelectorAll(".experience-box");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.5 }
  );

  experienceBoxes.forEach((box) => {
    observer.observe(box);
  });
});

//home
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("#home");

  const scrollHandler = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 150) {
        section.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", scrollHandler);
  scrollHandler(); // Trigger on load
});
