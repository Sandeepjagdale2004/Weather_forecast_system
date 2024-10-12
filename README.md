#**Weather App**

####**Overview**
The Weather App provides users with accurate weather forecasts by leveraging the OpenWeatherMap API. Users can search for weather details by entering a location, and the app dynamically displays the current weather along with forecasts for the next few days.

####**Features**
*Real-time Weather Updates: Fetches temperature, humidity, wind speed, and direction.<br>
*Five-day Forecast: Provides weather predictions for multiple days.<br>
*City Search: Users can input any city to retrieve specific weather details.<br>
*Interactive UI: A clean and responsive design with dynamic weather icons.<br>

####**Tech Stack**
+Frontend: HTML, CSS, JavaScript<br>
+API: OpenWeatherMap API<br>
+Libraries & Fonts:
-Font Awesome
-Google Fonts (Roboto)

####**File Structure**
│── index.html       # Main HTML file for the webpage<br>
│── style.css        # CSS for styling the interface<br>
│── weather.js       # JavaScript for fetching and displaying weather data<br>  
│── images/          # Folder containing icons and banner images<br>
│── js/              # Additional JS libraries (jQuery, app.js, etc.)<br>  

####**Installation & Setup**
1.	Clone the repository:<br>
`git clone <repository_url>`<br>
`cd weather-app`<br>
2.	Open index.html in a browser to view the app locally.<br>
3.	API Configuration:<br>
Replace the API key in weather.js if needed:<br>
`const API_KEY = 'your_openweathermap_api_key';`

####**Usage**
1.	Search for a city:<br>
Enter the name of a city in the search bar and click "Find."<br>
2.	View Forecast:
-Displays the current temperature, humidity, and wind conditions.
-Provides a 5-day forecast for quick reference.

####**Dependencies**
*OpenWeatherMap API – Retrieves weather forecasts.
*jQuery – Simplifies DOM manipulation.
*Font Awesome – Adds icons to the user interface.


![image](https://github.com/user-attachments/assets/543bda53-eec9-4b45-b99b-2c61373ac7c8)


####**Known Issues**
-If the city is not found, the app will display an error message in the console.
-The app currently does not support weather alerts or notifications.
