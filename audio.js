const sound = new Howl({
    src: ['music/song.mp3'],
    loop: true,
    volume: 0.5,
    onend: function() {
        console.log('Finished playing!');
    }
});

let hasPlayed = false;

window.addEventListener('scroll', function() {
    if (window.scrollY > 0 && !hasPlayed) {
        sound.play();
        hasPlayed = true;
    }
});
