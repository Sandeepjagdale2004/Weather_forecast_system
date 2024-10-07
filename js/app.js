(function($, document, window) {

    $(document).ready(function() {

        // Cloning main navigation for mobile menu
        $(".mobile-navigation").append($(".main-navigation .menu").clone());

        // Mobile menu toggle 
        $(".menu-toggle").click(function() {
            $(".mobile-navigation").slideToggle();
        });
    });

    $(window).load(function() {

    });

})(jQuery, document, window);

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const randerDatesData = todaysDate => {
    const dayElements = document.querySelectorAll('.day');
    const todaysDayIndex = todaysDate.getDay();
    dayElements.forEach((dayElements,index) =>
    dayElements.innerHTML = DAYS[(todaysDayIndex + index)%7]);
    document.getElementById('date').innerHTML = `${todaysDate.getDate()} ${MONTHS[todaysDate.getMonth()]}`;
}
const rander = (data) => {
    randerDatesData(new Date(data.list[0].dt_txt));
    document.getElementById('cityName').innerHTML = data.city.name;
    document.getElementById('humidity').innerHTML = `${data.list[0].main.humidity}%`;
    const windSpeed = Math.round(data.list[0].wind.speed * 3.6);
    document.getElementById('windSpeed').innerHTML = `${windSpeed}Km/h`
    document.getElementById('windDegree').innerHTML = `${data.list[0].wind.deg}<sup>o</sup>`;

    const tempElements = document.querySelectorAll('.temp');
    tempElements.forEach((tempElement,index) => {
        const temp = Math.round(data.list[index * 8].main.temp);
        const elementValue = `${temp}<sup>o</sup>C`;
        tempElement.innerHTML = elementValue;
    });

    const weatherIconElements = document.querySelectorAll('.weather-icon');
    weatherIconElements.forEach((weatherIconElement,index) => {
        const basePath = './images/icons';
        const srcPath = `${basePath}/${data.list[index*8].weather[0].icon}.svg`;
        weatherIconElement.src = srcPath;
    })
}

const processWeatherRequest = (evt) => {
    evt.preventDefault();
    const cityName = document.getElementById('city').value;
    if(cityName) {
        getWeatherDetails(cityName)
            .then(data => rander(data))
            .catch(err => alert('Cannot find your city! please check'));
    } else {
        alert('Please enter city name!')
    }
}

const cityForm = document.getElementById('cityForm');
cityForm.addEventListener('submit',processWeatherRequest);
