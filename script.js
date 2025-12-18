/* SECTION SWITCHING */
function showSection(id) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

/* OPEN WHEN LETTERS */
const letters = {
  sad: " Oii!! Madam  💕 Even on your hardest days, I believe in you completely. Dont give up even if u losee, You can do it ",
  miss: "If you miss me right now, just know I’m thinking about you too ❤️"
};

function showLetter(type) {
  const display = document.getElementById("letterDisplay");
  display.innerText = letters[type];
  display.classList.remove("hidden");
}

/* WHY I LOVE YOU */
const reasons = [
  "Your smile makes my whole day better",
  "You make me feel Alivee",
  "Your laugh is my favorite sound",
  "You understand me without words",
  "You’re my fav person ",
  "I love the way your mind works",
  "Being around you feels effortless and right",
  "You’re my favorite adventure",
];

function generateReason() {
  const index = Math.floor(Math.random() * reasons.length);
  document.getElementById("reasonText").innerText = reasons[index];
}

/* MINI GAME */
let score = 0;
let timeLeft = 30;
let gameInterval;
let timerInterval;

const heart = document.getElementById("heart");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const message = document.getElementById("gameMessage");

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.innerText = score;
  timeDisplay.innerText = timeLeft;
  message.classList.add("hidden");

  moveHeart();

  gameInterval = setInterval(moveHeart, 800);
  timerInterval = setInterval(updateTimer, 1000);
}

function moveHeart() {
  const box = document.getElementById("gameBox");
  const maxX = box.clientWidth - 40;
  const maxY = box.clientHeight - 40;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  heart.style.left = x + "px";
  heart.style.top = y + "px";
}

heart.addEventListener("click", () => {
  score++;
  scoreDisplay.innerText = score;
  moveHeart();
});

function updateTimer() {
  timeLeft--;
  timeDisplay.innerText = timeLeft;

  if (timeLeft <= 0) {
    endGame();
  }
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);

  if (score >= 10) {
    message.classList.remove("hidden");
  } else {
    message.innerText = "Almost 💕 Try again — I believe in you.";
    message.classList.remove("hidden");
  }
}


