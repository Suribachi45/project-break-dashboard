const apiKey = 'db8d1553d9714940a4585327240912'; 
const city = 'Madrid'; 

async function getWeatherData() {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`); 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Actualizar los elementos HTML con los datos obtenidos
    document.getElementById('city').textContent = data.location.name;
    document.getElementById('country').textContent = data.location.country;
    document.getElementById('temperature').textContent = data.current.temp_c;
    document.getElementById('condition').textContent = data.current.condition.text;
    document.getElementById('weather-icon').src = `http:${data.current.condition.icon}`;
    document.getElementById('humidity').textContent = data.current.humidity;
    document.getElementById('wind_speed').textContent = data.current.wind_kph;
    document.getElementById('wind_dir').textContent = data.current.wind_dir;

    // Pronóstico diario
    let cards = document.getElementById('cards');
    cards.innerHTML = ''; // Limpiamos el contenido anterior el contenido

    data.forecast.forecastday.forEach(day => {
      const dayService = new Date(day.date); 

      const dayOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][dayService.getDay()];
      const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      const month = monthNames[dayService.getMonth()];
      const date = `${dayService.getDate()} ${month}`; 

      const card = document.createElement('div');
      card.classList.add('card'); // Agregar una clase CSS para estilo
      card.innerHTML = `
        <h3>${dayOfWeek} - ${date}</h3>
        <img src="http:${day.day.condition.icon}" alt="${day.day.condition.text}">
        <p>Temperatura máxima: ${day.day.maxtemp_c}°C</p>
        <p>Temperatura mínima: ${day.day.mintemp_c}°C</p>
      `;
      cards.appendChild(card);
    });

  } catch (error) {
    const errorElement = document.createElement('p');
    errorElement.textContent = 'No se pudo obtener la información del clima.';
    document.getElementById('weather-app').appendChild(errorElement);
  }
}

getWeatherData();