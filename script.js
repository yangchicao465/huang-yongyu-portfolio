const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-nav a");

function setMenu(open) {
  menuButton?.setAttribute("aria-expanded", String(open));
  mobileNav?.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
}

menuButton?.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

const directorySection = document.querySelector("#skills");
const enterDirectoryButton = document.querySelector(".portfolio-start");
const backToCoverButton = document.querySelector(".back-to-cover");
const backToDirectoryButton = document.querySelector(".back-to-directory");
const portfolioSections = [
  ...document.querySelectorAll("main > section:not(.hero, .skills-menu)"),
];
const portfolioSectionMap = new Map(
  portfolioSections.map((section) => [section.id, section]),
);

function clearActiveSection() {
  portfolioSections.forEach((section) => section.classList.remove("is-active-section"));
}

function updateHistory(hash, mode) {
  const nextUrl = hash
    ? `${window.location.pathname}${window.location.search}${hash}`
    : `${window.location.pathname}${window.location.search}`;

  if (mode === "push") {
    history.pushState(null, "", nextUrl);
  } else if (mode !== "none") {
    history.replaceState(null, "", nextUrl);
  }
}

function openDirectory(event, options = {}) {
  event?.preventDefault();
  setMenu(false);
  document.body.classList.remove("home-locked");
  document.body.classList.remove("view-section");
  document.body.classList.add("view-directory");
  clearActiveSection();
  updateHistory("#skills", options.historyMode ?? "replace");
  window.scrollTo(0, 0);
  requestAnimationFrame(() => directorySection?.focus({ preventScroll: true }));
}

function openSection(id, event, options = {}) {
  const section = portfolioSectionMap.get(id);
  if (!section) return;

  event?.preventDefault();
  setMenu(false);
  document.body.classList.remove("home-locked", "view-directory");
  document.body.classList.add("view-section");
  clearActiveSection();
  section.classList.add("is-active-section");
  section.setAttribute("tabindex", "-1");
  updateHistory(`#${id}`, options.historyMode ?? "push");
  window.scrollTo(0, 0);
  requestAnimationFrame(() => section.focus({ preventScroll: true }));
}

function returnToCover(event, options = {}) {
  event?.preventDefault();
  setMenu(false);
  document.body.classList.remove("view-directory");
  document.body.classList.remove("view-section");
  document.body.classList.add("home-locked");
  clearActiveSection();
  updateHistory("", options.historyMode ?? "replace");
  window.scrollTo(0, 0);
  enterDirectoryButton?.focus({ preventScroll: true });
}

enterDirectoryButton?.addEventListener("click", openDirectory);
backToCoverButton?.addEventListener("click", returnToCover);
backToDirectoryButton?.addEventListener("click", openDirectory);

document.addEventListener("click", (event) => {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return;
  }

  const link = event.target.closest("a[href]");
  if (!link || link.target === "_blank" || event.defaultPrevented) return;

  const href = link.getAttribute("href");
  if (!href?.startsWith("#")) return;

  const target = href.slice(1);
  if (portfolioSectionMap.has(target)) {
    openSection(target, event);
  } else if (target === "skills") {
    openDirectory(event);
  } else if (target === "top") {
    returnToCover(event);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  setMenu(false);
  if (document.body.classList.contains("view-section")) {
    openDirectory();
  } else if (document.body.classList.contains("view-directory")) {
    returnToCover();
  }
});

window.addEventListener("popstate", () => {
  const target = window.location.hash.slice(1);
  if (portfolioSectionMap.has(target)) {
    openSection(target, null, { historyMode: "none" });
  } else if (target === "skills") {
    openDirectory(null, { historyMode: "none" });
  } else {
    returnToCover(null, { historyMode: "none" });
  }
});

const initialTarget = window.location.hash.slice(1);
if (portfolioSectionMap.has(initialTarget)) {
  openSection(initialTarget, null, { historyMode: "none" });
} else if (initialTarget === "skills") {
  openDirectory(null, { historyMode: "none" });
} else if (document.body.classList.contains("home-locked")) {
  updateHistory("", "replace");
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" },
  );

  revealItems.forEach((item) => {
    const bounds = item.getBoundingClientRect();
    if (bounds.top < window.innerHeight * 1.02) {
      item.classList.add("is-visible");
    } else {
      observer.observe(item);
    }
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const kineticGrid = document.querySelector("#kinetic-grid");
const kineticInstallation = document.querySelector("#kinetic-installation");
const coverWordmark = document.querySelector("#cover-wordmark");
const coverDoodles = [...document.querySelectorAll(".cover-doodle")].map((element, index) => ({
  element,
  x: 0,
  y: 0,
  angle: 0,
  velocityX: 0,
  velocityY: 0,
  velocityAngle: 0,
  phase: index * 1.17,
  depth: Number(element.dataset.depth) || 1,
}));
const panelColumns = 12;
const panelRows = 7;
const panelCount = panelColumns * panelRows;
const panelTones = [0, 1, 2, 3];
const panels = [];

if (kineticGrid) {
  for (let index = 0; index < panelCount; index += 1) {
    const panel = document.createElement("div");
    const face = document.createElement("div");
    const column = index % panelColumns;
    const row = Math.floor(index / panelColumns);

    panel.className = "kinetic-panel";
    panel.dataset.tone = String((index * 7 + row) % panelTones.length);
    face.className = "kinetic-panel-face";
    face.style.setProperty("--bg-x", `${(column / (panelColumns - 1)) * 100}%`);
    face.style.setProperty("--bg-y", `${(row / (panelRows - 1)) * 100}%`);

    panel.append(face);
    kineticGrid.append(panel);
    panels.push({
      element: panel,
      x: 0,
      y: 0,
      velocityX: 0,
      velocityY: 0,
      phase: column * 0.43 + row * 0.8,
      influence: 0.72 + ((index % 6) * 0.09),
    });
  }
}

const pointer = { x: 0, y: 0 };
let pointerVelocity = 0;
let previousPointerX = 0;
let wordmarkAngle = 0;
let wordmarkVelocity = 0;

if (kineticInstallation) {
  kineticInstallation.addEventListener("pointermove", (event) => {
    const bounds = kineticInstallation.getBoundingClientRect();
    pointer.x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2));
    pointer.y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2));
    pointerVelocity = pointerVelocity * 0.45 + (event.clientX - previousPointerX) * 0.55;
    previousPointerX = event.clientX;
  });

  kineticInstallation.addEventListener("pointerleave", () => {
    pointer.x = 0;
    pointer.y = 0;
    pointerVelocity = 0;
  });

  kineticInstallation.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") {
      pointerVelocity = (event.clientX < window.innerWidth / 2 ? -1 : 1) * 28;
    }
  });
}

function animatePanels(time) {
  pointerVelocity *= 0.94;
  const wind = Math.max(-20, Math.min(20, pointerVelocity * 0.38));

  panels.forEach((panel) => {
    const idleSway = Math.sin(time * 0.00115 + panel.phase);
    const idleTilt = Math.cos(time * 0.00092 + panel.phase * 1.17);
    const targetY = pointer.x * 11 * panel.influence + wind * panel.influence + idleSway * 1.25;
    const targetX = -pointer.y * 7 * panel.influence + idleTilt * 0.7;

    panel.velocityY += (targetY - panel.y) * 0.042;
    panel.velocityX += (targetX - panel.x) * 0.038;
    panel.velocityY *= 0.9;
    panel.velocityX *= 0.88;
    panel.y += panel.velocityY;
    panel.x += panel.velocityX;

    const lift = Math.min(11, Math.abs(panel.y) * 0.46);
    panel.element.style.transform = `rotateX(${panel.x.toFixed(3)}deg) rotateY(${panel.y.toFixed(3)}deg) translateZ(${lift.toFixed(2)}px)`;
  });

  if (coverWordmark) {
    const targetAngle = pointer.x * 5.5 + Math.max(-3, Math.min(3, pointerVelocity * 0.1));
    wordmarkVelocity += (targetAngle - wordmarkAngle) * 0.035;
    wordmarkVelocity *= 0.9;
    wordmarkAngle += wordmarkVelocity;
    const wordLift = Math.sin(time * 0.0011) * 1.8;
    coverWordmark.style.transform = `translate(-50%, -50%) translate3d(${(pointer.x * 5).toFixed(2)}px, ${wordLift.toFixed(2)}px, 30px) rotate(${(-4 + wordmarkAngle).toFixed(3)}deg)`;
  }

  coverDoodles.forEach((doodle, index) => {
    const driftX = Math.sin(time * 0.00125 + doodle.phase) * 2.2;
    const driftY = Math.cos(time * 0.001 + doodle.phase * 1.33) * 2.8;
    const targetX = pointer.x * 8 * doodle.depth + wind * 0.16 * doodle.depth + driftX;
    const targetY = pointer.y * 5 * doodle.depth + driftY;
    const targetAngle =
      Math.sin(time * 0.0011 + doodle.phase) * (2.2 + index * 0.16) +
      pointer.x * 4.2 * doodle.depth +
      wind * 0.08;

    doodle.velocityX += (targetX - doodle.x) * 0.045;
    doodle.velocityY += (targetY - doodle.y) * 0.05;
    doodle.velocityAngle += (targetAngle - doodle.angle) * 0.038;
    doodle.velocityX *= 0.9;
    doodle.velocityY *= 0.9;
    doodle.velocityAngle *= 0.87;
    doodle.x += doodle.velocityX;
    doodle.y += doodle.velocityY;
    doodle.angle += doodle.velocityAngle;

    doodle.element.style.transform = `translate(${doodle.x.toFixed(2)}px, ${doodle.y.toFixed(2)}px) rotate(${doodle.angle.toFixed(2)}deg)`;
  });

  requestAnimationFrame(animatePanels);
}

if (panels.length && !reduceMotion.matches) {
  requestAnimationFrame(animatePanels);
}

const skillEntries = document.querySelectorAll(".skill-entry");

skillEntries.forEach((entry) => {
  entry.addEventListener("pointermove", (event) => {
    if (reduceMotion.matches) return;
    const bounds = entry.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    entry.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
    entry.style.setProperty("--tilt-y", `${(x * 6).toFixed(2)}deg`);
  });

  entry.addEventListener("pointerleave", () => {
    entry.style.setProperty("--tilt-x", "0deg");
    entry.style.setProperty("--tilt-y", "0deg");
  });
});

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
