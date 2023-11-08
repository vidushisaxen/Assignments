document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");
    // const playPauseButton = document.getElementById("playPauseButton");
    const playButton = document.getElementById('playButton');
        const pauseButton = document.getElementById('pauseButton');
    const progressBar = document.getElementById("progress");
    const startTime = document.getElementById("startTime");
    const endTime = document.getElementById("endTime");

    const arrowButton = document.getElementById('arrow');
    const box = document.querySelector('.box');

    arrowButton.addEventListener('click',()=>{
        box.classList.toggle('expanded');
    })


    playButton.addEventListener('click', () => {
        if(audioPlayer.paused){
            audioPlayer.play();
            playButton.style.display = 'none';
        pauseButton.style.display = 'flex';
        }
        // else{
        //     audioPlayer.pause();
        //     pauseButton.style.display = 'none';
        //     playButton.style.display = 'block';
        // }
        
    });
    pauseButton.addEventListener('click',()=>{
        audioPlayer.pause();
         pauseButton.style.display = 'none';
         playButton.style.display = 'flex';
    })


    // Update the progress bar and time displays as the audio plays
    audioPlayer.addEventListener("timeupdate", function() {
        const currentTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;
        
        // Update the progress bar value
        const progressValue = (currentTime / duration) * 100;
        progressBar.value = progressValue;

        // Update the start and end time
        startTime.textContent = formatTime(currentTime);
        endTime.textContent = formatTime(duration);
    });

    // Function to format time in MM:SS
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }
});


