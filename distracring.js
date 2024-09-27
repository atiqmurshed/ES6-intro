const actor = {
    name: 'annanta',
    age: 39,
    phone: '01725967850',
    money: 52603
}
// const phone = actor.phone;
// const age = actor.age;

const {phone, age: boyos} = actor;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
// console.log(age);
// console.log(age);
console.log(boyos);

const number =[20, 50];
const[first, second] = number;
const [x, y] = [12, 23];

//Advanced;
function doubleThem(a, b){
    return [a*2, b*2];
}
const [prothom, ditiyo] = doubleThem(4, 2)
console.log(prothom, ditiyo);


//advanced;
const user = {
    name: 'ak mole khan',
    popularity: 'mr: bean'
}
const {name} = user;
console.log(name);

