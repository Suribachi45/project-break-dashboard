
 function relojHora() {
    let date = new Date();
  
    // Hora
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
  
    // Fecha
    let dia = date.getDate();
    let mes = date.getMonth() + 1; // Los meses comienzan en 0
    let año = date.getFullYear();
    dia = (dia < 10) ? "0" + dia : dia;
    month = (mes < 10) ? "0" + mes : mes;
  
    let hora = hh + ":" + mm + ":" + ss;
    let fecha = dia + "/" + mes + "/" + año;
  
    let fechaHora = fecha + " " + hora;

    // Frases

    let frases = {
      'buenosDias': '¡Buenos Días!',
      'horaCafe': '¡Hora del café!',
      'buenasTardes': '¡Buenas Tardes!',
      'horaMerienda': '¡Hora de merendar!',
      'buenasNoches': '¡Buenas Noches!'
    };
    let saludo = '¡Hola!';
  
    if (hh >= 6 && hh < 12) {
      saludo = frases.buenosDias;
    } else if (hh >= 12 && hh < 13) {
      saludo = frases.horaCafe;
    }else if (hh >= 13 && hh < 16) {
        saludo = frases.buenasTardes;
    }else if (hh >= 16 && hh < 20) {
          saludo = frases.horaMerienda;
    } else {
      saludo = frases.buenasNoches;
    }

    fechaHora += `${saludo}`;


  
  let reloj = document.querySelector('#reloj');
    reloj.innerHTML = fechaHora;
  }
  
  setInterval(relojHora, 1000);