// var : no reason to use var
// let : allow it to reassign
// const: do not allow it to reassign

const money = 25;
// money = 50;
const rich = money + 25;
console.log(rich);

let count = 0;
count = count + 10;
console.log(count)

const numbers = [23, 4, 23, 12, 56];
// numbers = [4, 5, 7, 7];  // ekhane amra const er khetre reasign korte pari na. tai error ashche



numbers[1] = 55;
numbers.push(8, 9, 65); // ei dui khetre reasign hoy ni but moddify hoyeche, sompurno notun ekta array ke ekhane reasign kora hoy ni , ager array ke ekhane modify kora hoise

console.log(numbers);

// object 
const student = {
    name: 'moyna pakhi',
    class: 12
}

// student = {name:'kokil konthi'} // ekhane student obj a amra notun arekti obj reassign korte chaway error ashche 
student.name = 'moyur konthi';// ekhane ager obj er name er value modify kora hoise tai error hoy ni
console.log(student);

// loop
let sum = 0;
for(let i = 0; i <10; i++){
    const num = i;  // ekhane error ashe ni karon loop er khetre protibar loop er sathe sathe sompurno notun variable declare hoy and etay value assign hoy, ager variable+ tar man kono kisui ar exist kore na

    
    sum = sum + num;
}
console.log(sum);