const navLinks = document.getElementById("navLinks");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

function openNav() {
  navLinks.classList.add("expanded");
  navLinks.classList.remove("collapsed");
  openMenu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
}

function closeNav() {
  navLinks.classList.remove("expanded");
  navLinks.classList.add("collapsed");
  openMenu.classList.remove("hidden");
  closeMenu.classList.add("hidden");
}

openMenu.addEventListener("click", openNav);
closeMenu.addEventListener("click", closeNav);

// Close menu on link click (mobile only)
const links = navLinks.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      closeNav();
    }
  });
});

// Handle resize
function handleResize() {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("collapsed", "expanded");
    navLinks.style.display = "flex";
    openMenu.classList.add("hidden");
    closeMenu.classList.add("hidden");
  } else {
    navLinks.classList.add("collapsed");
    navLinks.classList.remove("expanded");
    openMenu.classList.remove("hidden");
    closeMenu.classList.add("hidden");
  }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize); // Important for initial load
