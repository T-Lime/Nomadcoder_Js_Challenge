const audioPlayer = document.getElementById('audio-player');
const trackInfo = document.getElementById('track-info');
const fileInput = document.getElementById('file-input');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const volumeSlider = document.getElementById('volume-slider');

let tracks = [];
let currentTrackIndex = 0;

fileInput.addEventListener('change', (event) => {
    tracks = Array.from(event.target.files);
    if (tracks.length > 0) {
        updateTrack(0);
    }
});

playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = '일시 정지';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = '재생';
    }
});

prevBtn.addEventListener('click', () => {
    if (currentTrackIndex > 0) {
        updateTrack(currentTrackIndex - 1);
    } else {
        updateTrack(tracks.length - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentTrackIndex < tracks.length - 1) {
        updateTrack(currentTrackIndex + 1);
    } else {
        updateTrack(0);
    }
});

volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value;
});

function updateTrack(index) {
    const track = tracks[index];
    audioPlayer.src = URL.createObjectURL(track);
    trackInfo.textContent = `현재 재생 중: ${track.name}`;
    currentTrackIndex = index;
    audioPlayer.load();
    audioPlayer.play();
    playPauseBtn.textContent = '일시 정지';
}
