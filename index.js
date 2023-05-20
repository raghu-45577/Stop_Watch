// Getting all the required elements for stop watch
var sec = document.querySelector("#secs");
var min = document.querySelector("#mins");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var progress = document.getElementById("progress");

var seconds = 0;
var minutes = 0;

// handler used to start the timer when the start button is clicked
function startHandler() {
  // keeping the start button disabled after clicking, inorder to avoid clicking it again while times is running
  start.disabled = true;
  progress.innerText = "RUNNING...";
  interval = setInterval(() => {
    // if seconds becomes 60, minutes should be increased and seconds should begin from 0 again
    if (seconds < 59) {
      // incrementing seconds variable for every 1 second
      seconds++;
    } else {
      minutes++;
      seconds = 0;
    }
    // checking if seconds < 10
    // if seconds less than 10 we append 0 to seconds and same goes with minutes
    sec.innerText = seconds < 10 ? "0" + seconds : seconds;
    min.innerText = minutes < 10 ? "0" + minutes : minutes;
  }, 1000);
}

function stopHandler() {
  // when clicked stop the start will again enabled
  start.disabled = false;
  progress.innerText = "STOPPED";
  //after clicking stop the timer should stop at current seconds and minutes
  sec.innerText = seconds < 10 ? "0" + seconds : seconds;
  min.innerText = minutes < 10 ? "0" + minutes : minutes;
  //   clearing the interval which was started
  clearInterval(interval);
}

function resetHandler() {
  // when clicked on reset the start will gets enabled if previously it was disabled
  start.disabled = false;
  progress.innerText = "STOP WATCH";
  seconds = 0;
  minutes = 0;
  //   after clicking reset the timer should start from 0 seconds and 0 minutes
  sec.innerText = "00";
  min.innerText = "00";
  //   clearing the interval which was started
  clearInterval(interval);
}

start.addEventListener("click", startHandler);
stop.addEventListener("click", stopHandler);
reset.addEventListener("click", resetHandler);
