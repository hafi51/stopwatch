//alert("Due to ongoing exams can't complete at the moment")
var min = 0;
var sec = 0;
var msec = 0;
var minHead = document.getElementById('min');
var secHead = document.getElementById('sec');
var msecHead = document.getElementById('msec');

function timer() {
    msec++;
    msecHead.innerHTML = msec;
    if (msec >= 99) {
        sec++;
        secHead.innerHTML = sec;
        msec = 0;
    } else if (sec >= 59) {

        sec = 0;
        min++;
        minHead.innerHTML = min;
    }
    playAudio()
}

function start() {
    interval = setInterval(timer, 10);
    document.getElementById('start').onclick = stop;
    document.getElementById('start').innerHTML = '<i class="fas fa-stop"></i>'
}
var tick = new Audio("tick.mp3");

function playAudio() {
    tick.play()
}

function pause() {
    clearInterval(interval);
}

function stop() {
    clearInterval(interval);
    document.getElementById('start').onclick = start;
    document.getElementById('start').innerHTML = '<i class="fas fa-play"></i>'
}

function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    msecHead.innerHTML = '0';
    secHead.innerHTML = '0';
    minHead.innerHTML = '0';
    stop();
}
var click = new Audio();
click.src = "click.mp3"

function clicker() {
    click.play()
}