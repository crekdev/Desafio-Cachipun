//Definimos variable cantidad de juegos
let cantidadJuegos;
/*const piedra = 0;
const papel = 1;
const tijera = 2;*/

//Pedimos cantidad de veces que se repetirá el juego a usuario, el ciclo se termina si la cantidad de veces es mayor a cero
do {
  cantidadJuegos = Number(prompt("Ingresa la cantidad de veces que jugaremos (ingresa un número mayor a cero)"));
} while (cantidadJuegos <= 0);

// For para ejecutar la cantidad de veces de repticion del juego
for (let i = 0; i < cantidadJuegos; i++) {

  //Pedimos la elección al usuario
  let juegoUsuario;

  let eleccionUser = prompt("Escribe Piedra, Papel o Tijera");
  switch (eleccionUser.toLowerCase()) {
    case "piedra":
      juegoUsuario = 0;
      break;

    case "papel":
      juegoUsuario = 1;
      break;

    case "tijera":
      juegoUsuario = 2;
      break;
  }

  //La máquina juega su juego
  let juegoMaquina = Math.floor(Math.random() * 3);
  let eleccionMaquina;
  switch (juegoMaquina) {
    case 0:
      eleccionMaquina = "Piedra";
      break;

    case 1:
      eleccionMaquina = "Papel";
      break;

    case 2:
      eleccionMaquina = "Tijera";
      break;

  }

  /*Lógica de juego
  ● Tijera le gana a papel
  ● Papel le gana a piedra
  ● Piedra le gana a tijera*/

  if (juegoUsuario != 0) {
    if (juegoUsuario > juegoMaquina && juegoMaquina != 0) {
      alert("Ganaste!!!! " + "Juego Maquina: " + eleccionMaquina + " | Tu juego: " + eleccionUser);
    } else if (juegoUsuario < juegoMaquina && juegoMaquina != 0) {
      alert("Perdiste: " + "Juego Maquina: " + eleccionMaquina + " | Tu juego: " + eleccionUser);
    } else if (juegoUsuario == juegoMaquina) {
      alert("Empate: " + "Juego Maquina: " + eleccionMaquina + " | Tu juego: " + eleccionUser);
    } else if (juegoUsuario == 2 && juegoMaquina == 0) {
      alert("Perdiste: " + "Juego Maquina: " + eleccionMaquina + " | Tu juego: " + eleccionUser);
    } else {
      alert("Ganaste!! " + "Juego Maquina: " + eleccionMaquina + " | Tu juego: " + eleccionUser);
    }
  }

  if (juegoUsuario == 0) {
    if (juegoUsuario < juegoMaquina && juegoMaquina != 2) {
      alert("Perdiste :( " + "Juego Maquina: " + eleccionMaquina + " | Tu juego: " + eleccionUser);
    } else if (juegoMaquina == 2) {
      alert("Ganaste!!! " + "Juego Maquina: " + eleccionMaquina + " | Tu juego: " + eleccionUser);
    } else {
      alert("Empate: " + "Juego Maquina: " + eleccionMaquina + " | Tu juego: " + eleccionUser);
    }
  }
}
