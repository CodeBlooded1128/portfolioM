const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const workBtn = document.getElementById("btnWork"); // The "View Work" button (only on Home)

// ==========================================
// 1. LINKING PAGES (Safe Navigation)
// ==========================================
// We check if workBtn exists. If we are on work.html, this is null, so the code skips it.
if (workBtn) {
  workBtn.addEventListener("click", () => {
    window.location.href = "work.html";
  });
}

// ==========================================
// 2. THEME LOGIC (The "Link" between pages)
// ==========================================

// A. APPLY SAVED THEME ON LOAD
// This runs automatically every time ANY page loads.
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  if (toggleBtn) {
    toggleBtn.textContent = "⚪"; // Moon/Sun icon
  }
}

// B. TOGGLE CLICK LISTENER
// We check if toggleBtn exists because maybe some future page won't have it.
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      // Save to memory
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "⚪";
    } else {
      // Save to memory
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "⚫";
    }
  });
}
