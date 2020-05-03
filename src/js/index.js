import { BannerLogo } from "../components/bannerLogo";

customElements.define("banner-logo", BannerLogo);

/* Light/dark mode theme toggle */

// Select the theme toggle button
const toggleThemeBtn = document.querySelector(".toggle-theme");
const toggleSun = document.querySelector(".sun");
const toggleMoon = document.querySelector(".moon");

// On page load, check user's color scheme preference and set default scheme
window.onload = (event) => {
  // Define the query to check
  const schemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  // Set scheme based upon whether user's preferences is dark or light
  const localTheme = localStorage.getItem("theme");

  if (localTheme !== null) {
    document.documentElement.setAttribute("data-theme", localTheme);
    if (localTheme === "dark") {
      toggleMoon.classList.toggle("toggle-hidden");
    } else {
      toggleSun.classList.toggle("toggle-hidden");
    }
  } else {
    if (schemeQuery.matches) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggleMoon.classList.toggle("toggle-hidden");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      toggleSun.classList.toggle("toggle-hidden");
    }
  }
};

// Add an event listener that adds the correct theme via data-theme attribute
toggleThemeBtn.addEventListener("click", () => {
  // Add class for transition only when toggling the theme
  document.documentElement.classList.add("theme-transition");

  // Toggle the theme
  if (document.documentElement.getAttribute("data-theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleSun.classList.toggle("toggle-hidden");
    toggleMoon.classList.toggle("toggle-hidden");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleSun.classList.toggle("toggle-hidden");
    toggleMoon.classList.toggle("toggle-hidden");
  }

  // Remove the transition class, so it doesn't show it on page reload
  document.documentElement.classList.remove(".theme-transition");
});
