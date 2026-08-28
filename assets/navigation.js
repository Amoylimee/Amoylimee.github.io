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

const inkLines = document.querySelectorAll("[data-ink-text]");

if (inkLines.length) {
  let characterIndex = 0;

  inkLines.forEach((line, lineIndex) => {
    const text = line.textContent.trim().replace(/\s+/g, " ");
    line.textContent = "";
    line.setAttribute("aria-label", text);

    text.split(" ").forEach((word, wordIndex, words) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "ink-word";
      wordSpan.setAttribute("aria-hidden", "true");

      Array.from(word).forEach((character) => {
        const span = document.createElement("span");
        span.className = "ink-char";
        span.textContent = character;

        const writeDelay = 350 + characterIndex * 34 + lineIndex * 180;
        const fadeDelay = 7200 + characterIndex * 11;
        span.style.setProperty("--write-delay", `${writeDelay}ms`);
        span.style.setProperty("--fade-delay", `${fadeDelay}ms`);

        wordSpan.appendChild(span);
        characterIndex += 1;
      });

      if (wordIndex < words.length - 1) {
        const space = document.createElement("span");
        space.className = "ink-char ink-space";
        space.textContent = "\u00a0";

        const writeDelay = 350 + characterIndex * 34 + lineIndex * 180;
        const fadeDelay = 7200 + characterIndex * 11;
        space.style.setProperty("--write-delay", `${writeDelay}ms`);
        space.style.setProperty("--fade-delay", `${fadeDelay}ms`);
        wordSpan.appendChild(space);
        characterIndex += 1;
      }

      line.appendChild(wordSpan);
    });
  });
}
