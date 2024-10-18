function currentTime() {
    const d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    const utchr = d.getUTCHours();
    let ampm;
    let timeZone;

    // Add leading zero to single digits
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    // Determine AM or PM
    if (hr === 12) {
        ampm = "PM";
    } else if (hr > 12) {
        hr -= 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    // Determine time zone
    const adjTimeDiff = Math.abs(utchr - hr);
    if (adjTimeDiff === 7) {
        timeZone = "PT";
    } else if (adjTimeDiff === 6) {
        timeZone = "MT";
    } else if (adjTimeDiff === 5) {
        timeZone = "CT";
    } else {
        timeZone = "ET";
    }

    // Assemble time format to display
    const time = `${hr}:${min}:${sec} ${ampm} ${timeZone}`;
    document.getElementById("clock").innerText = time;
}

// Initial run of time date function
currentTime();

// Run time date function every 1 second
setInterval(currentTime, 1000);