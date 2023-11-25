const meuVideo = document.getElementById('meuVideo');

meuVideo.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
});