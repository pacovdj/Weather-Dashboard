    const api = {
    key: "4a59ff7f3d77921d89c3eeb91b1c1ac5",
    base: "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        
    }
}

function getResults (query) {
    fetch('${api.base}weather?q=${query}&units=imperial&APPID=${api.key}')
    .then(weather => {
    return weather.json();
    }).then(displayResults);

}

function displayResults (weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;


let now = new Date();
let date = document.querySelector('.location .date');
date.innterText = dateBuilder (now);

}

function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", 
    "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days [d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;


}
