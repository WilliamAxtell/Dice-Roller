const dicePicker = document.getElementById('dice-picker')
const rollBtn = document.getElementById('roll-btn');
const d4Input = document.getElementById('d4');

dicePicker.addEventListener('submit', (e)=>{
  e.preventDefault();
  console.log(d4Input.value);  
})