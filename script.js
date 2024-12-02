// script.js

// Select the carousel element
const carousel = document.getElementById("carousel");

// Variables to manage dragging state
let isDragging = false;
let startX, scrollLeft;

// Mouse down event - start dragging
carousel.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
  carousel.classList.add("dragging"); // Optional: add a class to style the dragging state
});

// Mouse leave event - stop dragging
carousel.addEventListener("mouseleave", () => {
  isDragging = false;
  carousel.classList.remove("dragging");
});

// Mouse up event - stop dragging
carousel.addEventListener("mouseup", () => {
  isDragging = false;
  carousel.classList.remove("dragging");
});

// Mouse move event - handle dragging
carousel.addEventListener("mousemove", (e) => {
  if (!isDragging) return; // Only execute if dragging
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2; // Adjust the scroll speed by changing the multiplier
  carousel.scrollLeft = scrollLeft - walk;
});
