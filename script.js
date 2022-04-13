const wrapperGame = document.querySelector(".wrapper-game");
//выбор уровня
let levelsGame = document.querySelectorAll(".level__game");
levelsGame.forEach((levelGame) => {
  levelGame.addEventListener("click", () => {
    levelsGame.forEach((level) => level.classList.remove("active"));
    levelGame.classList.add("active");
  });
});
// убрать карты
function deleteCards() {
  document.querySelector(".wrapper").style.display = "block";
  wrapperGame.style.display = "none";
  wrapperGame.innerHTML = "";
  wrapperGame.className = "wrapper-game";
}
//показать карты
function createCard(number) {
  for (let i = 0; i < number; i++) {
    const card = document.createElement("div");
    wrapperGame.appendChild(card);
    card.className = "flip-card";
    const cardInner = document.createElement("div");
    card.appendChild(cardInner);
    cardInner.className = "flip-card__inner";
    const cardFront = document.createElement("div");
    cardInner.appendChild(cardFront);
    cardFront.className = "flip-card__front";
    const cardBack = document.createElement("div");
    cardInner.appendChild(cardBack);
    cardBack.className = "flip-card__back";
    // Вскрытие карты
    card.addEventListener("click", () => {
      let numberRandom = Math.round(Math.random() * (number - 1));
      cardInner.classList.toggle("rotate");
      let cards = document.querySelectorAll(".flip-card__back");
      cards[numberRandom].classList.add("flip-card__back-bug");
      let cardRest = document.querySelectorAll(".flip-card");
      cardRest.forEach((card) => card.addEventListener("click", deleteCards));
    });
  }
}
//простой, средний, сложный уровни
function chooseLevel(level) {
  switch (level) {
    case "Простой":
      createCard(3);
      break;
    case "Средний":
      createCard(6);
      wrapperGame.classList.add("middle");
      break;
    case "Сложный":
      createCard(10);
      wrapperGame.classList.add("hard");
      break;
  }
}
//старт игры
const buttonPlay = document.getElementById("button");
buttonPlay.addEventListener("click", () => {
  document.querySelector(".wrapper").style.display = "none";
  document.querySelector(".wrapper-game").style.display = "flex";
  let level = document.querySelector(".active").innerText;
  chooseLevel(level);
});
