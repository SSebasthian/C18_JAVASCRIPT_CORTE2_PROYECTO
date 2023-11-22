const apiKey = "cdab5d23cb007ac8b5ad59655908bb97";

// Constructor para el objeto Weather
// Constructor para el objeto Weather
function Weather(city) {
  this.city = city;
  
  this.getWeather = async function () {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&lang=es`
      );
      if (response.ok) {
        const data = await response.json();

        // Procesar la respuesta
        const Datos_Clima = `
            <p><b>Ciudad:<br></b> ${data.name}<span class="icon-location-pin"></span></p>
            <p><b>Temperatura:<br></b> ${data.main.temp}°C <span class="icon-thermometer"></span></p>
            <p><b>Clima:<br></b> ${data.weather[0].description} <span class="icon-globe"></span></p>
            <p><b>Humedad:<br></b> ${data.main.humidity}% <span class="icon-water"></span></p>
            <p><b>Vel. Viento:<br></b> ${data.wind.speed}Km/h <span class="icon-air"></span></p>
            <p><b>Precion Atmosferica:<br></b> ${data.main.pressure} hPa<span class="icon-"></span></p>
            <p><b>Longitud:<br></b> ${data.coord.lon} Log <span class=""></span></p>
            <p><b>Latitud:<br></b> ${data.coord.lat} Lat<span class=""></span></p>
          
        `;
        document.getElementById("Datos_Clima").innerHTML = Datos_Clima;
      } else {
        throw new Error("Error al obtener datos del clima");
      }
    } catch (error) {
      console.error("Error al obtener datos del clima:", error);
    }
  };
}

// Objeto WeatherApp
const Aplicacion_Clima = {
  init: function () {
    document.getElementById("Boton_Ingresa_Ciudad").addEventListener("click", () => {
      const city = document.getElementById("Input_Ciudad").value;
      const weather = new Weather(city);
      weather.getWeather();
    });
  }
};

Aplicacion_Clima.init();
