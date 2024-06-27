document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const seekSlider = document.getElementById('seek');
    const title = document.getElementById('title');
    const artist = document.getElementById('artist');
    const trackImage = document.getElementById('track_image');

    let isPlaying = false;

    // Play and pause functionality
    playButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playButton.textContent = 'Play';
        } else {
            audio.play();
            playButton.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    });

    // Update seek slider as audio plays
    audio.addEventListener('timeupdate', () => {
        const value = (audio.currentTime / audio.duration) * 100;
        seekSlider.value = value;
    });

    // Seek functionality
    seekSlider.addEventListener('input', () => {
        const seekTo = audio.duration * (seekSlider.value / 100);
        audio.currentTime = seekTo;
    });

    // Change track information (example values, update as needed)
    function loadTrack(track) {
        audio.src = track.src;
        title.textContent = track.title;
        artist.textContent = track.artist;
        trackImage.src = track.image;
    }

    // Example of loading a new track
    const newTrack = {
        src: 'another-audio-file.mp3',
        title: 'New Title.mp3',
        artist: 'New Artist Name',
        image: 'new-track.jpg'
    };
    loadTrack(newTrack);
});
