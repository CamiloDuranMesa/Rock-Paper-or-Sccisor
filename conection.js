const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const imgSelected = document.getElementById('img-selected');
const cpuSelected = document.getElementById('cpu-selected');
const userPoints = document.getElementById('user-points');
const cpuPoints = document.getElementById('cpu-points');
const btnReload = document.getElementById('btn-reload');
const gameResult = document.getElementById('h3-result');

let userSelect = 0;
let cpuSelect = 0;

let userPoint = 0;
let cpuPoint = 0;

btnRock.addEventListener('click', ()=> {
  imgSelected.src = "img/Rock.jpeg";
  userSelect = 1;
  turnCpu();
  calculatePoints();
  finalScore();   
});

btnPaper.addEventListener('click', ()=>{
  imgSelected.src = "img/Paper.jpeg";
  userSelect = 2;
  turnCpu();
  calculatePoints(); 
  finalScore();  
}) 

btnScissors.addEventListener('click', ()=>{
  imgSelected.src = "img/Scissors.jpeg";
  userSelect = 3;
  turnCpu();
  calculatePoints();
  finalScore();   
})

function turnCpu() {
  let turn = randomNum(1,3);
  if (turn === 1) {
    cpuSelected.src = "img/Rock.jpeg";
    cpuSelect = 1;
  } else if (turn === 2) {
    cpuSelected.src = "img/Paper.jpeg";
    cpuSelect = 2;
  } else {
    cpuSelected.src = "img/Scissors.jpeg";  
    cpuSelect = 3;
  } 
}

function calculatePoints() {
  if (userSelect === cpuSelect) {
    gameResult.textContent = "Players tie!";    
  } else if( (userSelect === 1 && cpuSelect === 3) || (userSelect === 2 && cpuSelect === 1) || (userSelect === 3 && cpuSelect === 2)) {
    gameResult.textContent = "User Winner!";    
    userPoint++;
    userPoints.textContent = userPoint;
  } else {
    gameResult.textContent = "Cpu Winner";    
    cpuPoint++;
    cpuPoints.textContent = cpuPoint;
  } 
}

function finalScore() {
 if (userPoint === 3) {
  alert('User is the winner!');
  window.location.reload()
  return;
} else if(cpuPoint === 3) {
   alert('CPU is the winner!')
   window.location.reload()
   return;
 }
}