# Weather App

## Overview  
The **Weather App** provides users with accurate weather forecasts by leveraging the OpenWeatherMap API. Users can search for weather details by entering a location, and the app dynamically displays the current weather along with forecasts for the next few days.

## Features  
- **Real-time Weather Updates:** Fetches temperature, humidity, wind speed, and direction.
- **Five-day Forecast:** Provides weather predictions for multiple days.
- **City Search:** Users can input any city to retrieve specific weather details.
- **Interactive UI:** A clean and responsive design with dynamic weather icons.

## Tech Stack  
- **Frontend:** HTML, CSS, JavaScript  
- **API:** OpenWeatherMap API  
- **Libraries & Fonts:**  
  - [Font Awesome](https://fontawesome.com/)  
  - Google Fonts (Roboto)

## File Structure  
```text
│── .gitignore      # Ignore unnecessary files from version control  
│── .env            # Environment variables (API Key)
│── index.html       # Main HTML file for the webpage  
│── style.css        # CSS for styling the interface  
│── weather.js       # JavaScript for fetching and displaying weather data  
│── images/          # Folder containing icons and banner images  
│── js/              # Additional JS libraries (jQuery, app.js, etc.)  
```

## Installation & Setup  
1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd weather-app
   ```

2. **Open `index.html` in a browser** to view the app locally.

3. **API Configuration:**  
   Replace the API key in `weather.js` if needed:
   ```javascript
   const API_KEY = 'your_openweathermap_api_key';
   ```

## Usage  
1. **Search for a city:**  
   Enter the name of a city in the search bar and click "Find."

2. **View Forecast:**  
   - Displays the current temperature, humidity, and wind conditions.
   - Provides a 5-day forecast for quick reference.  

## Dependencies  
- **OpenWeatherMap API** – Retrieves weather forecasts.  
- **jQuery** – Simplifies DOM manipulation.  
- **Font Awesome** – Adds icons to the user interface.

## Screenshots  
![image](https://github.com/user-attachments/assets/d150302f-84f0-426a-97ef-09c83b45e764)
*The home page with a search bar and forecast cards.*

## Known Issues  
- If the city is not found, the app will display an error message in the console.
- The app currently does not support weather alerts or notifications.

# Weather_forecast_system
Website that updates us with the wether today and for next 4 days
