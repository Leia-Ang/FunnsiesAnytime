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
    // Google Maps integration
    const mapContainer = document.getElementById('mapContainer');
    const googleMap = document.getElementById('googleMap');
    let mapQuery = '';
    if (weather === 'Sunny') {
        mapQuery = `parks+outdoor+${encodeURIComponent(location)}`;
    } else if (weather === 'Rainy') {
        mapQuery = `museum+cafe+cinema+${encodeURIComponent(location)}`;
    } else {
        mapQuery = `shopping+library+restaurant+${encodeURIComponent(location)}`;
    }
    if (location) {
        googleMap.src = `https://www.google.com/maps/embed/v1/search?key=AIzaSyC5jOUA4uRMjMthhIw5gENoOJPQcZ1kCgU&q=${mapQuery}`;
        mapContainer.style.display = 'block';
    } else {
        mapContainer.style.display = 'none';
    }
});
