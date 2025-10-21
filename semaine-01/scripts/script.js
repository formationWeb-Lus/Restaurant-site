/* ============================================
   1️⃣ CRÉATION DU STYLE CSS VIA LE DOM
============================================ */
const style = document.createElement("style");
style.textContent = `

body {
  font-family: "Poppins", sans-serif;
  color: #333;
  background-color: #faf7f2;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* HEADER */
header {
  background-color: #8b0000;
  color: #fff;
  padding: 18px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo img {
  height: 55px;
  border-radius: 50%;
  border: 2px solid #f4b400;
}

.logo h1 {
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: 1px;
}

/* Navigation */
nav ul {
  display: flex;
  list-style: none;
  gap: 30px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  padding: 5px 0;
  transition: all 0.3s ease;
}

nav ul li a:hover {
  color: #f4b400;
}

/* HERO */
.hero {
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(60%);
  z-index: -1;
  transition: transform 8s ease-in-out;
}

.hero img:hover {
  transform: scale(1.08);
}

.hero-text {
  text-align: center;
  color: #fff;
  max-width: 700px;
  padding: 0 20px;
}

.hero-text h2 {
  font-size: 2.8rem;
  margin-bottom: 15px;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
}

.hero-text p {
  font-size: 1.2rem;
  margin-bottom: 25px;
  color: #f9f9f9;
}

/* Bouton */
#btn-decouvrir {
  background-color: #f4b400;
  color: #8b0000;
  border: none;
  border-radius: 30px;
  padding: 12px 30px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

#btn-decouvrir:hover {
  background-color: #fff;
  color: #8b0000;
  transform: scale(1.05);
}

/* PRÉSENTATION */
.presentation {
  background-color: #fff;
  text-align: center;
  padding: 80px 20px;
}

.presentation h3 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #8b0000;
}

.presentation p {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
}

/* FOOTER */
footer {
  background-color: #8b0000;
  color: #fff;
  text-align: center;
  padding: 25px 10px;
  font-size: 0.95rem;
  border-top: 2px solid #f4b400;
}

footer p {
  letter-spacing: 0.5px;
}

/* MODE SOMBRE */
.dark-mode {
  background-color: #2b2b2b;
  color: #e6e6e6;
}

.dark-mode header {
  background-color: #1c1c1c;
}

.dark-mode .presentation {
  background-color: #222;
}

.dark-mode footer {
  background-color: #1c1c1c;
  color: #f4b400;
}

/* BOUTON MODE */
#mode-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background-color: #f4b400;
  color: #8b0000;
}
`;
document.head.appendChild(style);

/* ============================================
   2️⃣ ÉLÉMENT DE SALUTATION DYNAMIQUE
============================================ */
const greetingElement = document.createElement("div");
greetingElement.classList.add("greeting");
greetingElement.style.textAlign = "center";
greetingElement.style.padding = "15px";
greetingElement.style.fontSize = "1.1rem";
document.body.prepend(greetingElement);

function getGreetingMessage() {
  const timezoneOffset = 2; // Fuseau horaire de Kinshasa (UTC+2)
  const now = new Date();
  const utcHour = now.getUTCHours();
  const hour = (utcHour + timezoneOffset + 24) % 24;
  if (hour < 12) return "☀️ Bonjour et bon appétit du matin !";
  if (hour < 18) return "🍽️ Bon après-midi au gourmet !";
  return "🌙 Bon dîner et bonne soirée au Gourmet !";
}
greetingElement.textContent = getGreetingMessage();

/* ============================================
   3️⃣ TEXTE ANIMÉ DU HERO
============================================ */
const heroSection = document.createElement("section");
heroSection.classList.add("hero");

const heroText = document.createElement("div");
heroText.classList.add("hero-text");
const heroH2 = document.createElement("h2");
const heroP = document.createElement("p");
heroP.textContent = "Le meilleur de la gastronomie locale et internationale.";

heroText.appendChild(heroH2);
heroText.appendChild(heroP);
heroSection.appendChild(heroText);
document.body.appendChild(heroSection);

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
typeEffect();

/* ============================================
   4️⃣ BOUTON MODE SOMBRE / CLAIR
============================================ */
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
