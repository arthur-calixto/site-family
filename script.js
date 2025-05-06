const btnVovo = document.getElementById('btnVovo');
const btnTitia = document.getElementById('btnTitia');
const surpresa = document.getElementById('surpresa');
const btnBerenice = document.getElementById('btnBerenice'); 
const mensagem = document.getElementById('mensagem');
const foto = document.getElementById('foto');
const titulo = document.querySelector('h2'); // Pega o h2 (a mensagem inicial)


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
    'A senhora vai ser bisavó este ano !',
    'foto-berenice.jpeg' // nova imagem
  );
});


function mostrarSurpresa(texto, caminhoDaFoto) {
  document.querySelector('.buttons').style.display = 'none';
  titulo.style.display = 'none'; // <-- Essa linha esconde o h2 também
  mensagem.textContent = texto;
  foto.src = caminhoDaFoto;
  surpresa.classList.remove('hidden');
}
