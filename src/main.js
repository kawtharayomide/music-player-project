// var audioPlayer = document.getElementById("audio-player");
// var playBtn = document.getElementById("play-btn");
// var pauseBtn = document.getElementById("pause-btn");
// var stopBtn = document.getElementById("stop-btn");
// var volumeSlider = document.getElementById("volume-slider");

// playBtn.addEventListener("click", function() {
// 	audioPlayer.play();

// });

// pauseBtn.addEventListener("click", function() {
// 	audioPlayer.pause();
// });

// stopBtn.addEventListener("click", function() {
// 	audioPlayer.pause();
// 	audioPlayer.currentTime = 0;
// });

// volumeSlider.addEventListener("input", function() {
// 	audioPlayer.volume = volumeSlider.value;
// });

var audioPlayer = document.getElementById("audio-player");
var playPauseBtn = document.getElementById("play-pause-btn");
// var volumeSlider = document.getElementById("volume-slider");
var icon = document.getElementById("icon")

playPauseBtn.addEventListener("click", function() {
	if (audioPlayer.paused) {
		audioPlayer.play();
		playPauseBtn.textContent = "";
	} else {
		audioPlayer.pause();
		playPauseBtn.textContent = "";
	}
});

// volumeSlider.addEventListener("input", function() {
// 	audioPlayer.volume = volumeSlider.value;
// });
// l
