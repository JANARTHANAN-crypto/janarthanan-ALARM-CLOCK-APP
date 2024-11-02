const currentTimeDisplay = document.getElementById('currentTime');
const setAlarmBtn = document.getElementById('set-alarm-btn');
const clearAlarmBtn = document.getElementById('clear-alarm-btn');
const alarmSound = document.getElementById('alarmSound');

let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    currentTimeDisplay.innerText = `${hours}:${minutes}:${seconds}`;

    if (alarmTime && `${hours}:${minutes}` === alarmTime) {
        playAlarm();
    }
}

function setAlarm() {
    const hour = document.getElementById('alarm-hour').value.padStart(2, '0');
    const minute = document.getElementById('alarm-minute').value.padStart(2, '0');
    alarmTime = `${hour}:${minute}`;
    alert(`Alarm set for ${alarmTime}`);
}

function clearAlarm() {
    alarmTime = null;
    stopAlarm();
    alert('Alarm cleared');
}

function playAlarm() {
    alarmSound.play();
}

function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
}

setAlarmBtn.addEventListener('click', setAlarm);
clearAlarmBtn.addEventListener('click', clearAlarm);

setInterval(updateTime, 1000);

