const dicePicker = document.getElementById('dice-picker')
const diceContainer = document.getElementById('dice-container');
const rollBtn = document.getElementById('roll-btn');

const diceInput = document.querySelectorAll('input[type="number"]');
const d4Input = document.getElementById('d4');
const d6Input = document.getElementById('d6');
const d8Input = document.getElementById('d8');  
const d10Input = document.getElementById('d10');
const d12Input = document.getElementById('d12');
const d20Input = document.getElementById('d20');

let numbers = Array.from({length: 60}, (_, i) => i + 1);
console.log(numbers)

const diceClipPaths = {
  'd4': 'clip-path-d4',
  'd6': 'clip-path-d6',
  'd8': 'clip-path-d8',
  'd10': 'clip-path-d10',
  'd12': 'clip-path-d12',
  'd20': 'clip-path-d20'
}

dicePicker.addEventListener('submit', (e)=>{
  e.preventDefault();
  
  insertDivs(60);
  
  const dice = {
    'd4': d4Input.value,
    'd6': d6Input.value,
    'd8': d8Input.value,
    'd10': d10Input.value,
    'd12': d12Input.value,
    'd20': d20Input.value
}

  fetch('/ajax-roller', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dice)
  })
  .then(res => res.json())
  .then(function(data) {
   diceScatter(data)
  })
  .catch((error) => {
    console.log(error)
  })
  
  diceInput.forEach(die => die.value = '0');
})

function insertDivs(num) {
  diceContainer.innerHTML = '';

  for (let i = 0; i < num; i++) {
      let newDiv = document.createElement('div');
      diceContainer.appendChild(newDiv);
  }
}

function diceScatter(dice) {
  let targetDiv = document.querySelector('#dice-container > :nth-child(1)');
  targetDiv.classList.add('rolled-die', diceClipPaths[dice[0][0]]);
  targetDiv.innerHTML = `<p>${dice[0][1]}</p>`;
  console.log(dice[0][1])
}