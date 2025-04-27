const btnVovo = document.getElementById('btnVovo');
const btnTitia = document.getElementById('btnTitia');
const surpresa = document.getElementById('surpresa');
const mensagem = document.getElementById('mensagem');
const foto = document.getElementById('foto');

btnVovo.addEventListener('click', () => {
  mostrarSurpresa(
    'Vocês serão vovô e vovó este ano!',
    'foto-vovos.jpg' // <-- Foto dos vovôs
  );
});

btnTitia.addEventListener('click', () => {
  mostrarSurpresa(
    'Você será titia este ano!',
    'foto-titia.jpg' // <-- Foto da tia
  );
});

function mostrarSurpresa(texto, caminhoDaFoto) {
  document.querySelector('.buttons').style.display = 'none';
  mensagem.textContent = texto;
  foto.src = caminhoDaFoto;
  surpresa.classList.remove('hidden');
}
