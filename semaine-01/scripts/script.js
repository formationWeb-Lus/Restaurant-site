// ==============================
// 1️⃣ Message d’accueil selon l’heure (Kinshasa UTC+2)
// ==============================
const greetingElement = document.createElement("div");
greetingElement.classList.add("greeting");
greetingElement.style.textAlign = "center";
greetingElement.style.padding = "10px";
greetingElement.style.fontWeight = "bold";
greetingElement.style.color = "#8b0000";
document.body.prepend(greetingElement);

function getGreetingMessage() {
  const timezoneOffset = 2;
  const now = new Date();
  const utcHour = now.getUTCHours();
  const hour = (utcHour + timezoneOffset + 24) % 24;
  if (hour < 12) return "☀️ Bonjour et bon appétit du matin !";
  if (hour < 18) return "🍽️ Bon après-midi au gourmet !";
  return "🌙 Bon dîner et bonne soirée au Gourmet !";
}
greetingElement.textContent = getGreetingMessage();

// ==============================
// 2️⃣ Effet de texte animé dans le Hero
// ==============================
const heroH2 = document.querySelector(".hero-text h2");
const textToType = [
  "Découvrez nos plats raffinés...",
  "Savourez une expérience unique...",
  "Bienvenue au Restaurant Le Gourmet !"
];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const delayBetweenTexts = 2000;

function typeEffect() {
  if (charIndex < textToType[textIndex].length) {
    heroH2.textContent += textToType[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, typingSpeed);
  } else {
    setTimeout(() => {
      heroH2.textContent = "";
      charIndex = 0;
      textIndex = (textIndex + 1) % textToType.length;
      typeEffect();
    }, delayBetweenTexts);
  }
}
heroH2.textContent = "";
typeEffect();

// ==============================
// 3️⃣ Mode sombre / clair
// ==============================
const modeButton = document.createElement("button");
modeButton.id = "mode-toggle";
modeButton.textContent = "🌙 Mode Sombre";
document.body.appendChild(modeButton);

modeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeButton.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Mode Clair"
    : "🌙 Mode Sombre";
});

// ==============================
// 4️⃣ Changement automatique du lien actif
// ==============================
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(sectionId)) {
          link.classList.add("active");
        }
      });
    }
  });
});
