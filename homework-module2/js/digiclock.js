

//Creat a time date function
function currentTime() {
    //Declare variables
    var d = new Date(); //Get current data
    var hr = d.getHours(); //Get current hours
    var min = d.getMinutes(); //Get current minutes
    var sec = d.getSeconds(); //Get current seconds
    var ampm; //Declear empty variables to store AM or PM
    var utchr = d.getUTCHours(); //Get current Greenwitch Mean Time (GMT)
    var timeDiff; //To store time difference between GMT hour and Local hour
    var adjTimeDiff; //To store time difference converted to positive number
    var timeZone; //To store the 4 time zones (PT,MT,CT,ET)
    //Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
    //Add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }
    if (utchr == 0) {
        utchr = "12";
    }
    //Determine AM or PM string
    if (hr == 12) {
        ampm = "PM"; //Set to PM
    } else if (hr > 12) {
        hr -= 12; //Deduct 12 from hours greater than 12 (military time)
        ampm = "PM"; //Set to PM
    } else {
        ampm = "AM"; //Set to AM
    }
    //convert negative hour difference into positive
    if (utchr >= hr) {
        adjTimeDiff = utchr - hr;
    } else {
        adjTimeDiff = hr - utchr;
    }
    //Storing 4 time zone
    var timeZone = ("PT", "MT", "CT", "ET")
    //Giving time zone to the timeDiff variable and printing it
    if (adjTimeDiff == utchr - 7) {
        timeZone = "PT";
    } else if (adjTimeDiff == utchr - 6) {
        timeZone = "MT";
    } else if (adjTimeDiff == utchr - 5) {
        timeZone = "CT";
    } else {
        timeZone = "ET";
    }
    //Assemble time formate to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
    //Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time; //adding time
    //Time difference between GMT hour and local hour
    var timeDiff = hr - utchr;
    //Display hour difference of GMT and local time
    //document.getElementById("diff").innerText = timeDiff;
    //Display positive time difference
    //document.getElementById("diff").innerText = adjTimeDiff;
}
//Initial run of time date function
currentTime();

//Run time data function every 1 second
setInterval(currentTime, 1000); //setting timer

    
 