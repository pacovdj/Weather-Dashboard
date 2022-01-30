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
}
