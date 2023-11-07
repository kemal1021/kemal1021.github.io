let countdown = 600;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsRemaining = seconds % 60;
  return `${minutes}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
}

function updateTimer() {
  const timerElement = document.getElementById('timer');
  timerElement.innerText = formatTime(countdown);

  if (countdown > 0) {
    countdown--;
    setTimeout(updateTimer, 1000); 
  } else {
    timerElement.innerText = 'Waktu Habis';
  }
}

// Mulai timer
updateTimer();