const unlockBtn = document.getElementById("unlockBtn");
const liveMessage = document.getElementById("liveMessage");
const errorMessage = document.getElementById("errorMessage");

const birthGirl = document.getElementById("birthGirl");
const nicknameGirl = document.getElementById("nicknameGirl");
const nicknameMe = document.getElementById("nicknameMe");
const birthMe = document.getElementById("birthMe");

const intro = document.getElementById("intro");
const memories = document.getElementById("memories");
const messages = document.getElementById("messages");
const cakeSection = document.getElementById("cakeSection");

const nextBtn = document.getElementById("nextBtn");
const cakeBtn = document.getElementById("cakeBtn");
const blowBtn = document.getElementById("blowBtn");

const secretBtns = document.querySelectorAll(".secretBtn");
const secretMessage = document.getElementById("secretMessage");

const finalMessage = document.getElementById("finalMessage");
const flames = document.querySelectorAll(".flame");

const bgMusic = document.getElementById("bgMusic");

// =====================
// PERSONNALISE ICI
// =====================

const correctBirthGirl = "01/01/2008";
const correctNicknameGirl = "petite sorcière";
const correctNicknameMe = "razak";
const correctBirthMe = "01/01/2000";

// =====================
// MESSAGES DYNAMIQUES
// =====================

birthGirl.addEventListener("input", () => {
  liveMessage.innerHTML = "🎂 Jour officiel où le monde a reçu trop de problèmes 😭";
});

nicknameGirl.addEventListener("input", () => {
  liveMessage.innerHTML = "😌 Hmm... donc tu acceptes officiellement ce surnom.";
});

nicknameMe.addEventListener("input", () => {
  liveMessage.innerHTML = "👀 Intéressant... tu continues donc à m'appeler comme ça.";
});

birthMe.addEventListener("input", () => {
  liveMessage.innerHTML = "✨ Tu te souviens encore de ma date ? dangereux ça 😭";
});

// =====================
// VERIFICATION
// =====================

unlockBtn.addEventListener("click", () => {

  const gBirth = birthGirl.value.trim().toLowerCase();
  const gNick = nicknameGirl.value.trim().toLowerCase();
  const mNick = nicknameMe.value.trim().toLowerCase();
  const mBirth = birthMe.value.trim().toLowerCase();

  if(
    gBirth === correctBirthGirl.toLowerCase() &&
    gNick === correctNicknameGirl.toLowerCase() &&
    mNick === correctNicknameMe.toLowerCase() &&
    mBirth === correctBirthMe.toLowerCase()
  ) {

    intro.classList.add("hidden");
    memories.classList.remove("hidden");

    bgMusic.play();

  } else {

    errorMessage.innerHTML = "🚫 Accès refusé. Tu n'es peut-être pas la vraie sorcière 😌";

    liveMessage.innerHTML = "⚠️ Analyse terminée : niveau de bêtise élevé mais identité incorrecte 😭";

  }
});

// =====================
// NAVIGATION
// =====================

nextBtn.addEventListener("click", () => {
  memories.classList.add("hidden");
  messages.classList.remove("hidden");
});

cakeBtn.addEventListener("click", () => {
  messages.classList.add("hidden");
  cakeSection.classList.remove("hidden");
});

// =====================
// MESSAGES SECRETS
// =====================

secretBtns.forEach(btn => {

  btn.addEventListener("click", () => {
    secretMessage.innerHTML = btn.dataset.message;
  });

});

// =====================
// BOUGIES
// =====================

blowBtn.addEventListener("click", () => {

  flames.forEach(flame => {
    flame.style.display = "none";
  });

  finalMessage.classList.remove("hidden");

  createConfetti();

});

// =====================
// CONFETTIS
// =====================

function createConfetti(){

  for(let i = 0; i < 80; i++){

    const confetti = document.createElement("div");

    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.background = `hsl(${Math.random()*360},100%,50%)`;
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-20px";
    confetti.style.borderRadius = "50%";
    confetti.style.zIndex = "9999";

    document.body.appendChild(confetti);

    let position = -20;

    const fall = setInterval(() => {

      position += 5;

      confetti.style.top = position + "px";

      if(position > window.innerHeight){

        clearInterval(fall);
        confetti.remove();

      }

    }, 20);

  }

}