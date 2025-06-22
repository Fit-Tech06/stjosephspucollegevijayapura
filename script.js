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
  });