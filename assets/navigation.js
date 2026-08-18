const navShell = document.querySelector(".nav-shell");
const banner = document.querySelector(".research-banner, .cover-banner");

function updateNavigation() {
  if (!navShell) return;

  const threshold = banner
    ? Math.max(0, banner.offsetHeight - navShell.offsetHeight)
    : 0;

  navShell.classList.toggle("is-scrolled", window.scrollY > threshold);
}

window.addEventListener("scroll", updateNavigation, { passive: true });
window.addEventListener("resize", updateNavigation);
updateNavigation();
