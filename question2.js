// 2. String-arrays (3p)
// Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// tips: använd indexOf eller includes

function filterWordsWithLetterA(arr) {
  // Din kod här

  const letter = "a";
  const filteredWords = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().includes(letter)) {
      filteredWords.push(arr[i]);
    }
  }
  return filteredWords;
}

console.log(filterWordsWithLetterA(["Programming", "is", "great!"])); // ska logga ["Programming", "great!"]
