const { Weather } = require('./weather'); // Asi podemos instanciar directamente la clase
const { Ui } = require('./ui');
const { Almacen } = require('./Store');
const almacen = new Almacen();

const { city, countryCode } = almacen.getLocationData();

const ui = new Ui();
const weather = new Weather(city, countryCode);
require('./index.css');

async function obtenerClima () {

    const data = await weather.getWeather();
    ui.render(data);
    console.log(data);

};

document.getElementById('w-change-btn').addEventListener('click', (e) => {
   const city=  document.getElementById('city').value;
   const countryCode = document.getElementById('countryCode').value;
   weather.changeLocation(city, countryCode);
   almacen.setLocationData(city, countryCode);
   obtenerClima();
   e.preventDefault();
})

document.addEventListener('DOMContentLoaded', obtenerClima);