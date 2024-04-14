let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);

// Code to generate Random Letters

function getRandomLowercaseLetter() {
    let randomCharCode = Math.floor(Math.random() * 26) + 97; // ASCII for a-z is 97-122
    return String.fromCharCode(randomCharCode);
  }
  
  let randomLowercaseLetter = getRandomLowercaseLetter();
  console.log(randomLowercaseLetter);