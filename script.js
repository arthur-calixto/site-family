const btnVovo = document.getElementById('btnVovo');
const btnTitia = document.getElementById('btnTitia');
const surpresa = document.getElementById('surpresa');
const mensagem = document.getElementById('mensagem');
const foto = document.getElementById('foto');
const titulo = document.querySelector('h2');

btnVovo.addEventListener('click', () => {
  mostrarSurpresa(
    'Vocês serão vovô e vovó este ano!',
    'foto-vovos.jpeg'
  );
});

btnTitia.addEventListener('click', () => {
  mostrarSurpresa(
    'Você será titia este ano!',
    'foto-titia.jpeg'
  );
});

function mostrarSurpresa(texto, caminhoDaFoto) {
  document.querySelector('.buttons').style.display = 'none';
  titulo.style.display = 'none'; 
  mensagem.textContent = texto;
  foto.src = caminhoDaFoto;
  surpresa.classList.remove('hidden');
}
