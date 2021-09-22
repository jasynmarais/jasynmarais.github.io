const date = document.querySelector(".date");
date.textContent = showDate();

function showDate() {
  var d = new Date();
  var curr_date = d.getDate();
  var curr_month = d.getMonth() + 1; //months are zero based
  var curr_year = d.getFullYear();
  return curr_date + "/" + curr_month + "/" + curr_year;
}

console.log(`Today's date is ${showDate()}.`);

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

console.log(`It's day ${getAction()} of ${currentYear}.`);

const percent = Math.floor((getAction() / days_of_a_year()) * 100);
console.log(`${percent}% of the year is behind you.`);

function days_of_a_year(year) {
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

randomQuote = function () {
  const quotes = new Array();
  quotes[0] = "'Trust the process, bruh.'";
  quotes[1] = "'ABC - Always Be Coding.'";
  quotes[2] = "'You can't learn to code by reading books.'";
  quotes[3] = "'Do you even know what JavaScript is, dog?'";
  quotes[4] = "'JavaScript is a helluva drug.'";
  quotes[5] = "'JavaScript completes me.'";
  quotes[6] = "'Don't hate, concatenate.'";
  quotes[7] = "'The compiler never lies.'";
  quotes[8] = "'The life of a coder is always intense.'";
  const rand = Math.floor(Math.random() * quotes.length);
  console.log(quotes[rand]);
};
randomQuote();

// function military_to_standard(time) {
//   time = time.split(":");
//   let hours = Number(time[0]);
//   let minutes = Number(time[1]);
//   let seconds = Number(time[2]);
//   let timeValue;
//   if (hours > 0 && hours <= 12) {
//     timeValue = "" + hours;
//   } else if (hours > 12) {
//     timeValue = "" + (hours - 12);
//   } else if (hours == 0) {
//     timeValue = "12";
//   }
//   timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes;
//   timeValue += seconds < 10 ? ":0" + seconds : ":" + seconds;
//   timeValue += hours >= 12 ? " PM" : " AM";
//   return timeValue;
// }

// console.log(military_to_standard("16:20:00"));
