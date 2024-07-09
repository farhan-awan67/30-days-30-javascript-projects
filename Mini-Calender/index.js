let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

const today = new Date();

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

date.innerHTML = today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = monthNames[today.getMonth()];
year.innerHTML = today.getFullYear();
