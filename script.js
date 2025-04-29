let currentAudio = null;

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const soundPath = button.getAttribute('data-sound');
    currentAudio = new Audio(soundPath);
    currentAudio.play();
  });
});

const stopBtn = document.querySelector('.stop');
stopBtn.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});