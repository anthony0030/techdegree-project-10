//converts date format from "2014-12-11 14:35:49" into 11/12/14
function dateConverter(date){
  const splitDate = date.date.split("-");
  const year = splitDate[0].substring(2);
  const month = splitDate[1];
  const splitDay = splitDate[2].split("T");
  const day = splitDay[0];
  return day + "/" + month + "/" + year;
}

function toTitleCase(str){
  return str;
}
