const btnVovo = document.getElementById('btnVovo');
const btnTitia = document.getElementById('btnTitia');
const btnBerenice = document.getElementById('btnBerenice');

const surpresa = document.getElementById('surpresa');
const mensagem = document.getElementById('mensagem');
const foto = document.getElementById('foto');
const titulo = document.getElementById('titulo');

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

btnBerenice.addEventListener('click', () => {
  mostrarSurpresa(
    'Você será bisavó novamente este ano, Berenice!',
    'foto-berenice.jpeg'
  );
});

function mostrarSurpresa(texto, caminhoDaFoto) {
  document.querySelector('.buttons').style.display = 'none';
  titulo.style.display = 'none';
  mensagem.textContent = texto;

  // Reinicia a animação
  foto.classList.remove('animated');
  void foto.offsetWidth;
  foto.src = caminhoDaFoto;
  foto.classList.add('animated');

  surpresa.classList.remove('hidden');
}
