document.getElementById('abrirCarta').addEventListener('click', () => {
    document.getElementById('carta').style.display = 'block';
    window.scrollTo(0, document.body.scrollHeight);
});

document.getElementById('activarMusica').addEventListener('click', () => {
    const audio = document.getElementById('musica');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
