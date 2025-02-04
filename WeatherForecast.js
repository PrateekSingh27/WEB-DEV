async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '53f5f5e8128c6578f0316dfd999b50a5';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            document.getElementById('weather').innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather && data.weather.length > 0 ? data.weather[0].description : 'N/A'}</p>`;
        } else {
            document.getElementById('weather').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p>Error fetching data</p>`;
    }
}