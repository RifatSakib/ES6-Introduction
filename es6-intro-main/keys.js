const glass = { 
    name: 'glass', 
    color: 'golden',  // here name,color,price,isClean are properties/Keys.  glass,golden,12,true are values
    price: 12, 
    isCleaned: true 
};

console.log(glass);
// all properties name
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]

// all property values
const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ]
// console.log(values)

const entries = Object.entries(glass);
// console.log(entries);
// array of array, two dimensional array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
// ]

// delete glass.isCleaned; // simple way to delete any of properties

const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

// freeze 
// Object.freeze(glass); // freeze korle obj er kono kisu poriborton kora zabe na, but obj er vetor child obj thakle seta change hobe

Object.seal(glass); //seal  er khetre exsisting sob keys er value update kora zabe kintu existing or notun kono keys add or delete kora jabe na
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);


