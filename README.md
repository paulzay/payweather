## WeatherApp

> Since we are programmers and sit inside the whole day we would like to have an app to check the weather outside so we do not
actually have to go outside to see what it's like.

[Live](https://payweather.vercel.app/)

## Project Description

The WeatherApp contains two screens:
- Loading screen
- Weather info screen

### Weather Info Screen
After the weather data has been loaded the weather info screen is made visible. This screen is capable of showing a minimum of
5 days of weather forecasts for the same location.
### Temperature checkbox
The screen contains a CheckboxGroup that switches between Celsius and Fahrenheit (Default). When the user selects i.e.
Celsius, all temperatures in the cards (BarChart) must switch to Celsius.
### Card Arrows
Below the Checkboxes, there are two arrows to scroll through the weather cards (pageSize == 3)
The left arrow is only visible when the current pageIndex is > 0.
The right arrow is only visible when there is an item at pageIndex + pageSize.
### Weather Cards
Below the arrows, a maximum of 3 weather cards are visible and they are laid out horizontally. Each card displays the weather
forecast for one day and must at least show the average temperature and date for that day.

## Built with

- React
- React-DOM
- React-Create-App
- Redux
- Axios
- npm
- CSS
- ES6
- MaterialUI
- nuka-carousel

## Screenshot
![screencapture-payweather-vercel-app-2021-04-21-02_30_59](https://user-images.githubusercontent.com/29974825/115476144-e5675980-a249-11eb-8ab7-2613181e2107.png)

## Getting Started

- Clone the project to your local machine;
- `cd` into the project directory;
- Run `npm install` to install the necessary modules;
- Run `npm start`, the page will automatically load on [localhost:3000](localhost:3000).
- RUn `npm test` to run the tests.

## Author

👤 **Paul Ogolla**

- Github: [@paulzay](https://github.com/paulzay)
- Twitter: [@paulzay](https://twitter.com/_paulzay_)
- Linkedin: [@paulzay](https://linkedin.com/in/paulogolla)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/paulzay/payweather/issues)

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is free to use as learning purposes. For any external content (e.g. logo, images, ...), please contact the proper author and check their license of use.
