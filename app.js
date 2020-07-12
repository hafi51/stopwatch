//alert("Due to ongoing exams can't complete at the moment")
var hour = 0;
var min = 0;
var sec = 0;
var hrsHead = document.getElementById('hours');
var minHead = document.getElementById('min');
var secHead = document.getElementById('sec');

function timer() {
    sec++;
    secHead.innerHTML = sec;
    if (sec >= 59) {
        min++;
        minHead.innerHTML = min;
        sec = 0;
    } else if (min >= 59) {
        hour++;
        min = 0;
        hrsHead.innerHTML = hour;
    }
    playAudio()
}

function start() {
    interval = setInterval(timer, 1000);
    document.getElementById('start').onclick = stop;
    document.getElementById('start').innerHTML = '<i class="fas fa-stop"></i>'
}
var tick = new Audio("tick.mp3");
function playAudio(){
    tick.play()
}
function pause(){
    clearInterval(interval);
} 

function stop() {
    clearInterval(interval);
    document.getElementById('start').onclick = start;
    document.getElementById('start').innerHTML = '<i class="fas fa-play"></i>'
}

function reset() {
    hour = 0;
    min = 0;
    sec = 0;
    secHead.innerHTML = '0';
    minHead.innerHTML = '0';
    hrsHead.innerHTML = '0';
    stop();
}