const number = [23, 10, 50, 66, 98, 5];
for(const num of number){

}

// const nobab = 'siraj uddulla'
// for(const char of nobab){
//     console.log(CharacterData);
// }

const glass = {
    name: 'glass',
    color: 'golden',
    price: 120,
    isCleaned: true
}
for(const key in glass){
    const value = glass[key];
    console.log(key, value);
}

//optional
const keys = Object.keys(glass);
console.log(keys);
for(const key of keys){
    const value = glass[key];
    console.log(key);
}