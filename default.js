
//default value provide for call function;
function add(num1=23, num2=0){
    const result = num1 + num2;

    console.log(num1, num2, result);
    return result;
}
// const sum = add(5, 7);
// const sum = add(5);
const sum = add(2);


//string value;
function fullName(first = '', last = 'maa'){
    const full = first + ' ' + last;
    console.log(first, last, full);
    return full;
}
const name = fullName('zihad');



//array a value default;
function friends(numbs = [524, 52], value =[]){
    const frind = numbs + value;
    console.log(numbs, value, frind);
    return frind;
}
const Arrai = friends(numbs = [25, 20, 54, 50], value = [25, 692, 30])


//object value default ;
function person(human = {}, member = {job: 'dhaka'}){
    const objective = human + member;
    console.log(human, member, objective);
    return objective;
}
// const persone = person(human = {name: 'khalid', class: 12}, member = {halal: 'khmo'})
const persone = person(human = {name: 'khalid', class: 12})

