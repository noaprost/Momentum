const API_KEY = "896b19481b5c3422e5945442f584c7bd"

const weatherAndTemp = document.querySelector(".weather span:first-child")
const city = document.querySelector(".weather span:last-child")

function onGeoSucess(curPos){
    const lat = curPos.coords.latitude
    const lon = curPos.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = data.weather[0].main
        const name = data.name
        const temp = data.main.temp
        weatherAndTemp.innerText = `${weather} / ${temp}`
        city.innerText = name
    })
}

function onGeoFailure(){
    alert("Fail to get your geolocation.")
}

navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoFailure)
