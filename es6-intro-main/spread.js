const max = Math.max(6, 23, 45, 1, 89, 23)
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(...numbers);
// console.log(...numbers)
console.log(arrayMax)

// use spread operator to copy
const friends = [4, 5, 87, 9];
const bondhu = friends;
// bondhu.push(12);   // array ba obj immutable + memromy te ekta specific jayga dokhol kore ebong tar reference share kore. fole amra jodi kono ekta array ke onno arekta array te assign kori, nth array te kono update korle n-1th array teo ta update hoye zabe. er theke somadhan pete (...) spread operator use hoy, zekhane ekta sompurno noutn ekta array copy hoye memoryte alada vabe jayga dokhol kore


const dosto = [...friends] // copy and store in different cell in memory and use its reference
console.log(dosto)
friends.push(100)
console.log(dosto)
console.log(friends)

// advanced  
const sonkha = [...friends, 9999] // add extra elements while copy
console.log(sonkha)