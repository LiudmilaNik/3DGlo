" use strict";

const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  let idInterval;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    if (getTime.timeRemaining > 0) {
      timerHours.textContent = getTime.hours;
      if (getTime.hours < 10) timerHours.textContent = "0" + getTime.hours;
      timerMinutes.textContent = getTime.minutes;
      if (getTime.minutes < 10)
        timerMinutes.textContent = "0" + getTime.minutes;
      timerSeconds.textContent = getTime.seconds;
      if (getTime.seconds < 10)
        timerSeconds.textContent = "0" + getTime.seconds;
    } else {
      clearInterval(updateClock);
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  };

  idInterval = setInterval(updateClock, 500);
};

export default timer;
