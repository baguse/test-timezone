import moment from "moment";
moment.locale("id");
const jam = moment().format("HH:mm");
const jamMoment = moment(jam, "HH:mm");
let greeting = "";
if (
  jamMoment > moment("00:00", "HH:mm") &&
  jamMoment <= moment("04:00", "HH:mm")
) {
  greeting = "dini hari";
} else if (
  jamMoment > moment("04:00", "HH:mm") &&
  jamMoment <= moment("10:00", "HH:mm")
) {
  greeting = "pagi hari";
} else if (
  jamMoment > moment("10:00", "HH:mm") &&
  jamMoment <= moment("14:00", "HH:mm")
) {
  greeting = "sore hari";
} else if (
  jamMoment > moment("14:00", "HH:mm") &&
  jamMoment <= moment("24:00", "HH:mm")
) {
  greeting = "malam hari";
}
console.log(jamMoment);
console.log(greeting);
