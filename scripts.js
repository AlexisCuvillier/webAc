// @ts-nocheck

// NavBar
const nav = document.getElementById("nav_link");
const toggleButton = document.getElementById("toggle_button");

const menuState = localStorage.getItem("menuState");
if (menuState === "open") {
  nav.style.display = "block";
} else {
  nav.style.display = "none";
}

toggleButton.addEventListener("click", () => {
  if (nav.style.display === "none") {
    nav.style.display = "block";
    localStorage.setItem("menuState", "open");
  } else {
    nav.style.display = "none";
    localStorage.setItem("menuState", "closed");
  }
});

// END

// Navigation Card
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const url = card.getAttribute("data-url");
    window.location.href = url;
  });
});
// END
