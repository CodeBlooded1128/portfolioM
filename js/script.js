const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const workBtn = document.getElementById("btnWork");

// ==========================================
// 1. LINKING PAGES
// ==========================================
if (workBtn) {
  workBtn.addEventListener("click", () => {
    window.location.href = "work.html";
  });
}

// ==========================================
// 2. THEME LOGIC
// ==========================================
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  if (toggleBtn) {
    toggleBtn.textContent = "⚪";
  }
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "⚪";
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "⚫";
    }
  });
}

// ==========================================
// 3. SCROLL ANIMATIONS (Intersection Observer)
// ==========================================
// This watches elements and triggers the animation when they appear on screen

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1, // Trigger when 10% visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-element");
    }
  });
}, observerOptions);

const hiddenElements = document.querySelectorAll(".hidden-element");
hiddenElements.forEach((el) => observer.observe(el));

// ==========================================
// 4. NAVBAR SCROLL EFFECT
// ==========================================
// Shrinks the navbar slightly when scrolling down
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  // Only apply if width is > 768px (Desktop)
  if (window.innerWidth > 768) {
    if (window.scrollY > 50) {
      navbar.style.padding = "15px 50px";
      navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    } else {
      navbar.style.padding = "20px 50px";
      navbar.style.boxShadow = "none";
      navbar.style.borderBottom = "1px solid rgba(0,0,0,0.05)";
    }
  }
});
