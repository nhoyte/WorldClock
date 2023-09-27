function updateDateTime() {
  //Tokyo,Japan
  let tokyoDateElement = document.querySelector("#date-tokyo");
  let tokyoTimeElement = document.querySelector("#time-tokyo");
  tokyoDateElement.innerHTML = moment().tz("Japan").format("dddd, MMMM Do");
  tokyoTimeElement.innerHTML = moment()
    .tz("Japan")
    .format("h:mm:ss:SS [<small>]A[</small>]");

  //New York, USA
  let newyorkDateElement = document.querySelector("#date-newyork");
  let newyorkTimeElement = document.querySelector("#time-newyork");
  newyorkDateElement.innerHTML = moment()
    .tz("America/New_York")
    .format("dddd, MMMM Do");
  newyorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("h:mm:ss:SS [<small>]A[</small>]");

  //Delhi, India
  let delhiDateElement = document.querySelector("#date-delhi");
  let delhiTimeElement = document.querySelector("#time-delhi");
  delhiDateElement.innerHTML = moment()
    .tz("Asia/Kolkata")
    .format("dddd, MMMM Do");
  delhiTimeElement.innerHTML = moment()
    .tz("Asia/Kolkata")
    .format("h:mm:ss:SS [<small>]A[</small>]");

  //Shanghai, China
  let shanghaiDateElement = document.querySelector("#date-shanghai");
  let shanghaiTimeElement = document.querySelector("#time-shanghai");
  shanghaiDateElement.innerHTML = moment()
    .tz("Asia/Shanghai")
    .format("dddd, MMMM Do");
  shanghaiTimeElement.innerHTML = moment()
    .tz("Asia/Shanghai")
    .format("h:mm:ss:SS [<small>]A[</small>]");
}

setInterval(updateDateTime, 100);

function updateCity(event) {
  let selectElement = document.querySelector("#choose-city");
  let timeZone = event.target.value;
  let city = selectElement.selectedOptions[0].label;
  let displayElmement = document.querySelector("#display-city");
  let date = moment().tz("${timeZone}").format("dddd, MMMM Do");
  let time = moment().tz("${timeZone}").format("h:mm:ss [<small>]A[</small>]");
  displayElmement.innerHTML = `<div class="city">
          <div>
            <h2>${city}</h2>
            <div class="date">${date}</div>
          </div>
          <div class="time">${time}</div>
        </div>`;
}
let selectElement = document.querySelector("#choose-city");
selectElement.addEventListener("change", updateCity);
