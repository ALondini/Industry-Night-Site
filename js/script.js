// Hamburger Menu Functionality

const hamButton = document.querySelector('.hamburger');
const menuList = document.querySelector('#hamburger-list');

function toggleMenu() {
    menuList.classList.toggle('active');
}

hamButton.addEventListener('click', toggleMenu);

// Video Player Functionality

const playerCon = document.querySelector(".player-container");
const player = document.querySelector("video");
const videoControls = document.querySelector(".video-controls");
const toggleButton = document.querySelector("#toggle-button");
    const playIcon = document.querySelector(".fa-play-circle-o");
    const pauseIcon = document.querySelector(".fa-pause-circle-o");
const replayButton = document.querySelector("#replay-button");
const volumeSlider = document.querySelector("#change-vol");
const fullScreen = document.querySelector("#full-screen");

player.controls = false; 
videoControls.classList.remove('hidden');

function togglePlay () {
    console.log("Playing video");
    if (player.paused) {
        player.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        console.log("Pausing video");
        player.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
}

function replayVideo () {
    console.log("Replaying video");
    player.pause();
    player.currentTime = 0;
}

function changeVolume() {
    console.log("Volume is:", volumeSlider.value);
    player.volume = volumeSlider.value;
}

function toggleFullScreen() {
    console.log("Exiting fullscren");
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        console.log("Toggling fullscreen");
        playerCon.requestFullscreen();
    }
}

function hideControls() {
    console.log("Hiding controls");
    videoControls.classList.add('hide');
}

function showControls() {
    console.log("Showing controls");
    videoControls.classList.remove('hide');
}

toggleButton.addEventListener("click", togglePlay);
replayButton.addEventListener("click", replayVideo);
volumeSlider.addEventListener("input", changeVolume);
fullScreen.addEventListener("click", toggleFullScreen);

videoControls.addEventListener("mouseenter", showControls);
videoControls.addEventListener("mouseleave", hideControls);
player.addEventListener("mouseenter", showControls);
player.addEventListener("mouseleave", hideControls);
