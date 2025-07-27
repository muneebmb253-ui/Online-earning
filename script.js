let points = 0;

function login() {
  const email = document.getElementById("email").value;
  document.getElementById("login").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  document.getElementById("userName").innerText = email.split("@")[0];
}

function watchAd() {
  const timerEl = document.getElementById("timer");
  let seconds = 10;
  timerEl.innerText = "Watching ad... " + seconds + "s";
  let interval = setInterval(() => {
    seconds--;
    if (seconds > 0) {
      timerEl.innerText = "Watching ad... " + seconds + "s";
    } else {
      clearInterval(interval);
      points += 10;
      document.getElementById("points").innerText = points;
      timerEl.innerText = "Ad finished. You earned 10 points!";
    }
  }, 1000);
}