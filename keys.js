const glass = {
    name: 'glass',
    color: 'golden',
    price: 120,
    isCleaned: true
}
console.log(glass);
const keys = Object.keys(glass);
// console.log(keys);

const values = Object.values(glass)
// console.log(values);

const entries = Object.entries(glass);
// console.log(entries);

//array of array tow daimantional array;
// [   ['name', 'glass'],
//     ['color', 'golden'],
//     ['price', 12],
//     ['isCleaned', 'true']
// ]

delete glass.isCleaned;

const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);
// console.log(glass);

//freeze;
// Object.freeze(glass)
glass.source = 'bangladesh';
glass.price = 2500;
console.log(glass);
//seal
Object.seal(glass);
glass.price = 2600;
glass.source = 'haka to faka';
console.log(glass);

