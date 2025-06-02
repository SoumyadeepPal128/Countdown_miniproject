const targetDate = new Date("July 20, 2025 10:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = (targetDate - now)/1000;

  const countdownEl = document.getElementById("countdown");

  if (distance < 0) {
    countdownEl.innerHTML = "🎉 We are milgye";
    return;
  }
  let day=Math.floor(distance/(60 * 60 * 24));
  let hour=Math.floor((distance%(60*60*24))/(60*60));
  let minute=Math.floor((distance%(60*60))/(60))
  let second=Math.floor((distance%(60)))

  

  countdownEl.innerHTML = `${day}d ${hour}h ${minute}m ${second}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Call once immediately
