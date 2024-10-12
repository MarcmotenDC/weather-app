/*
 * JavaScript Boilerplate for Weather Dashboard Assignment
 * 
 * This JavaScript file is part of the Asynchronous JavaScript assignment.
 * Your task is to complete the functions with appropriate async/await,
 * handle errors, and update the DOM with the fetched data.
 * 
 * Follow the TODO prompts and complete each section to ensure the
 * weather dashboard works as expected.
 */

// Function: Fetch Weather Data
async function fetchWeatherData(location) {
    const url = `https://wttr.in/${location}?format=j1`;
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
      console.error("Failed to get weather: " + error)
        throw error
        
    }
}

// Function: Display Weather Data
function displayWeatherData(data) {
    const weatherDisplay = document.getElementById('weatherData')
    console.log(data)
    weatherDisplay.innerHTML = `
<div>
    <ul>
        <li>City: <span id="cityName">${data.nearest_area[0].areaName[0].value}</span></li>
        <li>Temperature: <span id="temp">${data.current_condition[0].temp_F}</span></li>
        <li>Feels Like: <span id="feelsLike">${data.current_condition[0].FeelsLikeF}</span></li>
        <li>The Sky is <span id="weatherDesc">${data.current_condition[0].weatherDesc[0].value}</span></li>
    </ul>
</div>`

    
    
}

// Function: Get Weather
async function getWeather(location) {
    try {
        const weatherData = await fetchWeatherData(location)
        displayWeatherData(weatherData)
        
    } catch (error) {
        console.error("Failed to display weather: " + error)
        const weatherDisplay = document.getElementById('weatherData')
        weatherDisplay.innerHTML = error 
    }
}

// Event Listener for Form Submission
document.getElementById('weatherForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const location = document.getElementById('locationInput').value;
    await getWeather(location);
});
