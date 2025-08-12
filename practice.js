var applePrice = 120;
var orangePrice = 330;
let name = 'Nayeem Hasan Shanto'
let isBike = true;
const isMoney = false;
let str = '245';
// let str = 'abcd';

let vumi = 3.25;
let ucchota = 1.3;
let trivujerKhetroFol = (.5* vumi * ucchota);
console.log("Trivujer khetrol =", trivujerKhetroFol.toFixed(2));

var totalPrice = (applePrice+orangePrice);
console.log(totalPrice);

console.log(typeof(applePrice));
console.log(typeof(name));
console.log(typeof(isBike));
console.log(typeof(isMoney));
console.log(name.length);
console.log(typeof(name.length));

const stringAndNumber = (orangePrice + parseInt(name));
console.log("the sum of string and number is =", stringAndNumber);
console.log(parseInt(str));

console.log(applePrice + (name.length));

let nameLength = (name.length);
console.log(applePrice+ orangePrice + nameLength);
