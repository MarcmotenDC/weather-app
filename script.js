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
    const weatherDisplay = document.getElementById(weatherData)
    weatherDisplay.innerHTML = data

    
    
}

// Function: Get Weather
async function getWeather(location) {
    try {
        // TODO: Fetch weather data and display it
        // Hint: Call fetchWeatherData() and displayWeatherData()
        
        
    } catch (error) {
        // TODO: Display an error message in the DOM
        // Hint: Use document.getElementById() to select the element and update its innerHTML

    }
}

// Event Listener for Form Submission
document.getElementById('weatherForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const location = document.getElementById('locationInput').value;
    await getWeather(location);
});
