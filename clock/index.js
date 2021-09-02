const clockEl = document.getElementById("clock");

function getTime() {
  const time = new Date();
  let seconds = time.getSeconds();
  let minutes = time.getMinutes();
  let hours = time.getHours();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  clockEl.innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(getTime, 1000);
