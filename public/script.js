const dicePicker = document.getElementById('dice-picker')
const rollBtn = document.getElementById('roll-btn');

const diceInput = document.querySelectorAll('input[type="number"]');
const d4Input = document.getElementById('d4');
const d6Input = document.getElementById('d6');
const d8Input = document.getElementById('d8');  
const d10Input = document.getElementById('d10');
const d12Input = document.getElementById('d12');
const d20Input = document.getElementById('d20');

dicePicker.addEventListener('submit', (e)=>{
  e.preventDefault();
  //capture the values of the inputs
  
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
  .then((res) => {
    if (res.status === 200) {
      console.log("Post successfully created!")
      console.log(res)
    }
  })
  .catch((error) => {
    console.log(error)
  })
  
  diceInput.forEach(die => die.value = '0');
})
