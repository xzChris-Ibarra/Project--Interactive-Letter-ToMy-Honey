const btnAbrir = document.getElementById('btnAbrir');
const portada = document.getElementById('portada');
const carta = document.getElementById('carta');
const galeria = document.getElementById('galeria');
const scroll1 = document.getElementById('scroll-1');
const scroll2 = document.getElementById('scroll-2');

const audioPlayer = document.getElementById('audioPlayer');

btnAbrir.addEventListener('click', () => {
  portada.classList.add('hidden');
  carta.classList.remove('hidden');
  setTimeout(() => galeria.classList.remove('hidden'), 800);
  setTimeout(() => scroll1.classList.remove('hidden'), 1600);
  setTimeout(() => scroll2.classList.remove('hidden'), 2400);


  //  Reproducir música al tocar Abrir
  audioPlayer.play().catch((e) => {
    console.warn("No se pudo reproducir automáticamente la música:", e);
  });
});
