
document.getElementById('demo')?.textContent = 'Hello from JS!'; // Safe optional chaining

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    const color = e.target.id;
    if (['grey', 'white', 'blue', 'yellow'].includes(color)) {
      body.style.backgroundColor = color;
    }
  });
})
