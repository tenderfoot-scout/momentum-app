// ----- DISPLAY TIME -----
function displayTime() {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let mins = dateTime.getMinutes();
    let secs = dateTime.getSeconds();
    let sesh = document.getElementById("session");
    if(hrs >= 12) {
        sesh.innerHTML = 'PM';
    } else {
        sesh.innerHTML = 'AM';
    }
    if(hrs > 12) {
      hrs = hrs - 12;
    }
    if(mins < 10) {
      mins = '0'+mins;
    }
    if(secs < 10) {
      secs = '0'+secs;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = secs;
}
setInterval(displayTime, 10)