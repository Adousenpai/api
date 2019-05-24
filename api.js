let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let ville = "";
let main = document.querySelector("main");

var utcSeconds = 7200;
var d = new Date();
console.log(d);

function search() {
  console.log(main);
  main.style.display = "block";

  ville = input.value;
  src =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&units=metric&appid=2e8ba540e521c43064ae0eae3389589b";

  $.getJSON(src, function(data) {
    console.log(data);
    let icon =
      "https://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    let temperature = data.main.temp;
    let location = data.name;
    let humidity = data.main.humidity;
    let description = data.weather[0].description;
    console.log(description);
    $(".temper").text(Math.floor(temperature) + "°C");
    $("#ville").text(location);
    $(".icon").attr("src", icon);
    $("#valeur").text("Humidité" + " " + humidity + "%");
    $(".temp h3").text(description);
  });
}
