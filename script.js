const button = document.getElementById('revealButton');
const surpresa = document.getElementById('surpresa');

button.addEventListener('click', () => {
  button.style.display = 'none';
  surpresa.classList.remove('hidden');
});
