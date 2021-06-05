const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const start = document.getElementById("submit");
const stop = document.getElementById("Stop");
const reset = document.getElementById("Reset");

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;
let countDownTimerId = null;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
  hitPosition = randomSquare.id;
}

function moveMole() {
  timerId = setInterval(randomSquare, 1000);
}

function startMole() {
  moveMole();
  squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id === hitPosition) {
        result++;
        score.textContent = result;
        hitPosition = null;
      }
    });
  });

  function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
      clearInterval(countDownTimerId);
      clearInterval(timerId);
      alert("Game Over and score is " + result);
      currentTime = 10;
      result = 0;
      score.textContent = 0;
    }
  }
  countDownTimerId = setInterval(countDown, 1000);
}

function stopMole() {
  clearInterval(countDownTimerId);
  clearInterval(timerId);
}

function resetMole() {
  currentTime = 10;
  timerId = 0;
  clearInterval(countDownTimerId);
  clearInterval(timerId);
  result = 0;
  timeLeft.textContent = 0;
  score.textContent = 0;
}
