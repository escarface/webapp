export class Weather {


    constructor(city, countryCode) {
        this.aoukey = '0e14517bc0b7eab911cf17d71fa3debe';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather () {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.aoukey}&units=metric`;
        const response = await fetch(apiUrl);
        const data = response.json();
        return data;
        }

    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
} 