const navShell = document.querySelector(".nav-shell");
const researchBanner = document.querySelector(".research-banner");

function updateNavigation() {
  if (!navShell) return;

  const threshold = researchBanner
    ? Math.max(0, researchBanner.offsetHeight - navShell.offsetHeight)
    : 0;

  navShell.classList.toggle("is-scrolled", window.scrollY > threshold);
}

window.addEventListener("scroll", updateNavigation, { passive: true });
window.addEventListener("resize", updateNavigation);
updateNavigation();
