const apiKey = "2f9ee65d341a80489a4dde52aec03011";
async function getWeather(){
let city = document.getElementById("city").value

let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

let data = await response.json();

let weatherDiv = document.getElementById("result")
weatherDiv.innerHTML = `
<p>City : ${data.name}</p>
<p>temp : ${data.main.temp} °C</p>
<p>wind : ${data.wind.speed}<p/
>
`
}