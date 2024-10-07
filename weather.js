const API_KEY = 'f058e2bca5091c293e9216d144c10e38';
const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

const getWeatherDetails = async (cityName) => {
    const URL = `${BASE_URL}&q=${cityName}`;
    const response = await fetch(URL);
    if(response.ok){
        const data = await response.json();
        return data;
    }
    throw new Error(`Error: ${response.status}`);
}

// getWeatherDetails('Mumbai')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));