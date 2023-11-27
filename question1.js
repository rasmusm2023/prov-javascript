// 1. Booleans (3p)
// Skriv en funktion howFast som tar en siffra som input och
// returner följande sträng:
// "Fast" om siffran är högre eller lika med 100
// "Slow" om siffran är lägre eller lika med 20
// "Medium" om siffran är 30 till och med 50
// "Unknown" om inget av ovan stämmer

function howFast(num) {
  //Din kod här
  if (num >= 100) {
    return "Fast";
  } else if (num <= 20) {
    return "Slow";
  } else if (num <= 50 && num >= 30) {
    return "Medium";
  } else {
    return "Unknown";
  }
}

console.log(howFast(20)); // Ska logga "Slow"
console.log(howFast(50)); // Ska logga "Medium"
console.log(howFast(100)); // Ska logga "Fast"
console.log(howFast(25)); // Ska logga "Unknown"
