// let searchbutton=document.getElementById("searchbtn");
// console.log(searchbutton);
 

// searchbutton.addEventListener("click",getCity);


// function getCity(){
//    let cityname=document.querySelector("#inputField");
//     // console.log(cityname);
// let cityContent = cityname.value.trim();
//     // console.log(cityContent);

//     if(cityContent !== ""){

//     }
// }
// 
const apiKey = "567a1cb67f1a55608d0a4c5fc0632820";

document.getElementById("searchbtn").addEventListener("click", getWeather);

function getWeather() {
  let cityInput = document.getElementById("inputField").value.trim();

  if (!cityInput) {
    alert("Please enter a city name");
    return;
  }

  // Add ",IN" if user doesn't specify country code
  const city = cityInput.includes(",") ? cityInput : `${cityInput},IN`;
  console.log(city);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;


  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("City not found");
      return res.json();
    })
    .then((data) => {
      // Update temperature
      document.getElementById("tempper").innerHTML = `${Math.round(
        data.main.temp
      )}<sup style="font-weight: 500;">°</sup>`;

      // Update weather description
      document.getElementById("temptext").textContent =
        data.weather[0].description;

      // Update location with city and country
      document.getElementById("location").textContent = `${data.name}, ${
        data.sys.country
      }`;

      // Update feels like
      document.getElementById("tempfeel").innerHTML = `${Math.round(
        data.main.feels_like
      )}<sup>°</sup>`;

      // Update wind speed
      document.getElementById("windsec").innerHTML = `${data.wind.speed}<span style="font-weight: 600; font-size: 12px;">m/s</span>`;

      // Update humidity
      document.getElementById("humidity").innerHTML = `${data.main.humidity}<span style="font-weight: 600;">%</span>`;

      // Update weather icon
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      document.getElementById("image").src = iconUrl;
    })
    .catch((error) => {
      alert(error.message);
    });

  // Clear input field after search
  document.getElementById("inputField").value = "";
}
