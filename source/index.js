function updateDateTime() {
  //Tokyo,Japan
  let tokyoDateElement = document.querySelector("#date-tokyo");
  let tokyoTimeElement = document.querySelector("#time-tokyo");
  tokyoDateElement.innerHTML = moment().tz("Japan").format("dddd, MMMM Do");
  tokyoTimeElement.innerHTML = moment()
    .tz("Japan")
    .format("h:m:s:SS [<small>]A[</small>]");

  //New York, USA
  let newyorkDateElement = document.querySelector("#date-newyork");
  let newyorkTimeElement = document.querySelector("#time-newyork");
  newyorkDateElement.innerHTML = moment()
    .tz("America/New_York")
    .format("dddd, MMMM Do");
  newyorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("h:m:s:SS [<small>]A[</small>]");

  //Delhi, India
  let delhiDateElement = document.querySelector("#date-delhi");
  let delhiTimeElement = document.querySelector("#time-delhi");
  delhiDateElement.innerHTML = moment()
    .tz("Asia/Kolkata")
    .format("dddd, MMMM Do");
  delhiTimeElement.innerHTML = moment()
    .tz("Asia/Kolkata")
    .format("h:m:s:SS [<small>]A[</small>]");

  //Shanghai, China
  let shanghaiDateElement = document.querySelector("#date-shanghai");
  let shanghaiTimeElement = document.querySelector("#time-shanghai");
  shanghaiDateElement.innerHTML = moment()
    .tz("Asia/Shanghai")
    .format("dddd, MMMM Do");
  shanghaiTimeElement.innerHTML = moment()
    .tz("Asia/Shanghai")
    .format("h:m:s:SS [<small>]A[</small>]");
}

setInterval(updateDateTime, 100);
