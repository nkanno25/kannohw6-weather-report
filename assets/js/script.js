var searchCity = document.querySelector("#search-button");
var submitBtn = document.querySelector("#submit-btn");

var apiKey = "7852fb23097990b017418037b174bb1f";

var cityName = document.getElementById("city").value


function firstAPI() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey).then((res) => res.json()).then((data) => {
        console.log(data);
        var name = document.getElementById(`name1`);
        name.textContent = cityName;
        var lat = data.coord.lat;
        var lon = data.coord.lon;

        secondAPI(lat, lon);
    })
}

function secondAPI(lat, lon) {
    fetch("https://api.openweathermap.org/data/3.0/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey).then((res) => res.json()).then((data) => {
        console.log(data);
        for (var i = 0; i < 6; i++) {
        
            var temp = document.getElementById(`temp${i + 1}`);
            var wind = document.getElementById(`wind${i + 1}`);
            var humid = document.getElementById(`humid${i + 1}`);
            var uv = document.getElementById(`uv${i + 1}`);

            

            temp.textContent = data.daily[i].temp.max;
            wind.textContent = data.daily[i].wind_speed;
            humid.textContent = data.daily[i].humidity;
            uv.textContent = data.daily[i].uvi;


        }
    })
}