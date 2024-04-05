

function showTime(timeZone) {
  const now = new Date();
  const time = now.toLocaleString('en-US', { timeZone });
  document.getElementById('time').innerText = time;
}


