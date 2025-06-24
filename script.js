// Custom JS for St. Joseph's PU College Website

document.addEventListener("DOMContentLoaded", () => {
  // Back to Top Button Logic
  const backToTopBtn = document.createElement("button");
  backToTopBtn.innerText = "↑ Top";
  backToTopBtn.className =
    "fixed bottom-6 right-6 bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 z-50 hidden";
  backToTopBtn.id = "backToTop";
  document.body.appendChild(backToTopBtn);

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove("hidden");
    } else {
      backToTopBtn.classList.add("hidden");
    }
  });

  // Smooth scroll for nav links (if href starts with '#')
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Hamburger Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    });
  }
});

// Counter logic (only run when visible)
const counters = document.querySelectorAll('.counter');

const startCounting = (counter) => {
  const span = counter.querySelector('.count');
  const target = +counter.getAttribute('data-target');
  let current = 0;
  const speed = 100;
  const increment = Math.ceil(target / speed);

  const update = () => {
    if (current < target) {
      current += increment;
      span.innerText = current > target ? target : current;
      requestAnimationFrame(update);
    } else {
      span.innerText = target;
    }
  };

  update();
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.6
});

counters.forEach(counter => {
  observer.observe(counter);
});
