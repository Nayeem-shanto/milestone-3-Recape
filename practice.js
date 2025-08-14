/* Variable related Practice */
/* var applePrice = 120;
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
 */

/* Conditional statement related practice */

let number = 50;
if (number > 100) {
  console.log(true);
} else {
  console.log(false);
}

const budget = 100000;
let laptopPrice = 75000;
let extraMonitorPrice = 15000;
let accessoriesPrice = 1500;

if (budget >= 110000) {
  console.log("you will be able to buy full setup");
} else if (budget >= 100000) {
  if (laptopPrice <= 80000) {
    console.log("you need to choose 2 items");
  } else {
    console.log("try to find some low configuration");
  }
} else {
  console.log("wait for one more months");
}

console.log(5 == 10);
console.log(5 === 10);
console.log(5 != 10);

/* if-else shorthand or ternary */
/* condition?console.log(true hole jeta hobe)  : console.log(false hole jeta hobe) */

let number2 = 17;

number2 % 2 === 0
  ? console.log("The given number is a even number")
  : console.log("The given number is a odd number");

  const isLeader = true;
  if(isLeader){ /* boolean man true hole check korar dorkar hoy nah */
    console.log("Leader ashcche chair charo.");
  }
  else{
    console.log("leader ashbe nah");
  }

  const isCar = false;
  if(!isCar){ /* boolean man false hole check korar jonno shamne ekta logical not operator boshate hoy. */
    console.log("I will buy a car in sha allah");
  }
  else{
    console.log("My father has a car");
  }