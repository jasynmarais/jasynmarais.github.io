function showDate() {
  var d = new Date();
  var curr_date = d.getDate();
  var curr_month = d.getMonth() + 1; //months are zero based
  var curr_year = d.getFullYear();
  return curr_date + "/" + curr_month + "/" + curr_year;
}

function getAction() {
  let now = new Date();
  let start = new Date(now.getFullYear(), 0, 0);
  let diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  let one_day = 1000 * 60 * 60 * 24;
  let day_of_year = Math.floor(diff / one_day);
  return day_of_year;
}

const currentYear = new Date().getFullYear();

const percent = Math.floor((getAction() / days_of_a_year()) * 100);

function days_of_a_year(year) {
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

const date = document.querySelector(".date");
date.textContent = `Date: ${showDate()}`;

const day = document.querySelector(".day");
day.textContent = `Day ${getAction()} of ${days_of_a_year()} (${percent}%)`;

randomQuote = function () {
  const quotes = new Array();
  quotes[0] = "Web Development.";
  quotes[1] = "HTML, CSS and JavaScript.";
  const rand = Math.floor(Math.random() * quotes.length);
  return quotes[rand];
};
randomQuote();

const quote = document.querySelector(".quote");
quote.textContent = randomQuote();
