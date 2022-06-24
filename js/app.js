// 71c4b878d9df6b9124fb09a9918bf64f

// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=71c4b878d9df6b9124fb09a9918bf64f

const weatherApi = {
    key:"71c4b878d9df6b9124fb09a9918bf64f",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}
// event listner function on key press
const searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener('keypress',(event)=>{
   if(event.keyCode == 13){
       console.log(searchInputBox.value);
       getWeatherReport(searchInputBox.value);

   }

});

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(ShowWeatherReport);
}


function ShowWeatherReport(weather){
    console.log(weather);
    let city = document.getElementById('city');
    city.innerHTML = `${weather.name},${weather.sys.country}`;
    let temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;c`;
    let minmax = document.getElementById('min-max');
    minmax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;c (min)/${Math.ceil(weather.main.temp_max)}`;
    let weatherType = document.getElementById('weather');
    weatherType.innerHTML = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManager(todayDate);

       
    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('images/clear.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('images/cloud.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('images/cloud.jpg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('images/rain.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('images/snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
        
    } 
}

function dateManager(dateArg){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;


}