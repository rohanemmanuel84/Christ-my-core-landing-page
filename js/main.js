/* ═══════════════════════════════════════════════════════
   ChristMyCore — Main JavaScript
   Handles: scroll reveal, calendar, lead forms, bookings
   ═══════════════════════════════════════════════════════ */

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add("visible"); io.unobserve(e.target); }
  });
},{threshold:0.12});
reveals.forEach(r => io.observe(r));

// Mobile/tablet nav menu toggle
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navLinks = document.querySelector(".nav-links");
if(navMenuBtn && navLinks){
  navMenuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navMenuBtn.classList.toggle("open", isOpen);
    navMenuBtn.setAttribute("aria-expanded", isOpen);
  });
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navMenuBtn.classList.remove("open");
      navMenuBtn.setAttribute("aria-expanded", "false");
    });
  });
}
