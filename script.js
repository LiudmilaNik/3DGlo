"use strict";

const hello = () => {
  const hello = document.getElementById("hello");
  const todayData = document.getElementById("today-data");
  const dayTimeNow = document.getElementById("day-time-now");
  const dayNewYear = document.getElementById("day-new-year");

  let idInterval;

  const getTime = () => {
    let time = new Date(); /*получаем дату*/
    let hours = time.getHours(); /*из даты достаем часы*/
    console.log(time);
    return hours;
  };

  const showTimeDay = () => {
    let timeDay = getTime();
    console.log(timeDay);

    if (+timeDay >= 5 && +timeDay < 11) {
      hello.textContent = "Доброе утро!";
    } else if (+timeDay >= 11 && +timeDay < 17) {
      hello.textContent = "Добрый день!";
    } else if (+timeDay >= 17 && +timeDay < 23) {
      hello.textContent = "Добрый вечер!";
    } else if (+timeDay >= 23 && +timeDay < 5) {
      hello.textContent = "Доброй ночи";
      console.log("Доброй ночи");
    }
  };
  showTimeDay();

  const showDay = () => {
    let dayWeek = new Date().getDay(); /*получаем дату и номер дня недели*/

    if (dayWeek === 0) {
      todayData.textContent = "воскресенье";
    } else if (dayWeek === 1) {
      todayData.textContent = "понедельник";
    } else if (dayWeek === 2) {
      todayData.textContent = "вторник";
    } else if (dayWeek === 3) {
      todayData.textContent = "среда";
    } else if (dayWeek === 4) {
      todayData.textContent = "четверг";
    } else if (dayWeek === 5) {
      todayData.textContent = "пятница";
    } else if (dayWeek === 6) {
      todayData.textContent = "суббота";
    }
  };
  showDay();

  const showTime = () => {
    let showTime = new Date()
      .toTimeString()
      .substr(0, 8); /*получаем дату и время*/
    dayTimeNow.textContent = showTime;
    console.log(showTime);
  };
  showTime();

  const showDaysNewYear = (deadline) => {
    let dateStop = new Date("31 december 2022").getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);

    return { timeRemaining, days };
  };

  const upDays = () => {
    let getDays = showDaysNewYear();

    if (getDays.timeRemaining > 0) {
      dayNewYear.textContent = getDays.days;
    } else {
      clearInterval(upDays);
    }
  };

  idInterval = setInterval(upDays, 500);
  console.log(hello);
};

// export default hello

// import hello from './modules/hello.js'  - в index.js';

hello(); /*- в index.js'*/
