document.getElementById("a-score").innerText = "0";
document.getElementById("b-score").textContent = 0;

let scoreA = document.getElementById("a-score");
let scoreB = document.getElementById("b-score");

function incrementA() {
  scoreA.textContent += 1;
}

function incrementB() {
  scoreB.textContent += 1;
}
