// 3. (3p) Arrayer och Funktioner
// Skriv klart funktionen median som tar en array av nummer
// och returnerar median-värdet. Median-värdet är det mittersta
// numret i en serie med nummer. T.ex: är medianvärdet 7 i [1, 5, 7, 23, 120]
// I en array med jämnt antal nummer är median-värdet medelvärdet av
// de två mittersta talen: T.ex: 7.5 i [1, 5, 10, 33].
// Medelvärdet räknas då ut så här: (5 + 10)/2 = 7.5

// Följ denna algoritm för att lösa uppgiften:
// 1. Sortera arrayen med funktionen sortArray
// 2. Kolla om arrayens längd är udda eller jämn med funktionen isEven
// 3. Om arrayens längd är udda returnera talet på mitten-position ((arrayens längd - 1) / 2)
// 4. Om arryens längd är jämn räkna ut och returnera medelvärdet av de två mittersta talen.
//    Dessa har positioner: arrayens längd / 2 och  arrayens längd / 2 - 1
// OBS! Er funktion median måste använda funktionerna sortArray och isEven

const arr = [1, 5, 7, 23, 120][(1, 5, 10, 33)];

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

function isEven(num) {
  return num % 2 == 0;
}

function median(arr) {
  sortArray(arr);

  if (isEven(arr.length)) {
    const middle1 = arr.length / 2;
    const middle2 = middle1 - 1;
    return (arr[middle1] + arr[middle2]) / 2;
  } else {
    const middle = (arr.length - 1) / 2;
    return arr[middle];
  }
}

console.log(median([1, 5, 7, 23, 120])); // ska logga 7
console.log(median([1, 5, 10, 33])); // ska logga 7.5
