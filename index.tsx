let scoreA = document.getElementById("a-score");
let scoreB = document.getElementById("b-score");

let scoreOfA = 0;
let scoreOfB = 0;

function incrementA() {
  scoreOfA += 1;
  scoreA.textContent = scoreOfA;
}

function incrementB() {
  scoreOfB += 1;
  scoreB.textContent = scoreOfB;
}
