// FunnsiesAnytime - app.js
// Weather check and recommendations (placeholder logic)

document.getElementById('checkWeatherBtn').addEventListener('click', function() {
    const location = document.getElementById('location').value.trim();
    const weatherResult = document.getElementById('weatherResult');
    const placesList = document.getElementById('placesList');
    if (!location) {
        weatherResult.textContent = 'Please enter a city.';
        placesList.innerHTML = '';
        return;
    }
    // Placeholder: Simulate weather (random)
    const weatherTypes = ['Sunny', 'Rainy', 'Cloudy'];
    const weather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
    weatherResult.textContent = `Weather in ${location}: ${weather}`;
    // Recommendations based on weather
    let places = [];
    if (weather === 'Sunny') {
        places = ['Visit a park', 'Go for a picnic', 'Outdoor sports'];
    } else if (weather === 'Rainy') {
        places = ['Visit a museum', 'Go to a cafe', 'Watch a movie indoors'];
    } else {
        places = ['Go shopping', 'Visit a library', 'Try a new restaurant'];
    }
    placesList.innerHTML = places.map(place => `<li>${place}</li>`).join('');
});
