/* Let's learn about conditional statement */

/* 
    comparison--------
    = (store kore rakha.)
    == (loose equality. only man gula compare kore.)
    === (strong equality. man and data type compare kore.)
    != (not equal).
    > (grater then)
    < (less than)
    <= (less than equal)
    >= (grater than equal)
    && (and)
    || (or)
    += (plus equal).
    -= (minus equal).
*/

/* 
    1. if-else.
    2. if-else_if-else.
*/

/* 
    break==> (loop joto porjontoi cholar kotha thakuk na keno, jekhanei break dewa ase sekhane auto loop off hoye jabe.) 
    continue==> (jekhane continue thakbe oi iteration er next step gula skip kore next loop cholbe.)
*/

/* ------------------------------------------***********-------------------------------------------- */

// console.log(5>10);
// console.log(50>10);
// console.log(50>=10);
// console.log(50<=10);
// console.log(50!=0);

var applePrice = 400;
var orangePrice = 500;
var grapePrice = 600;

var totalFruitPrice = applePrice + orangePrice + grapePrice;
console.log(totalFruitPrice);

if (totalFruitPrice <= 1500) {
  console.log("Take 3 items fruits");
} else if (totalFruitPrice <= 1500 || orangePrice <= 640) {
  console.log("take 3 items");
} else {
  console.log("Take whatever you want.");
}

/* grade calculator */

var number = 68;

if (number >= 90) {
  console.log("Congratulations. You got A+");
} else if (number >= 80) {
  console.log("Good. You got A");
} else if (number >= 70) {
  console.log("Nice try. You got A-");
} else if (number >= 60) {
  console.log("Below average. You got B");
} else if (number >= 50) {
  console.log("Low marks. Need to improve. You got C");
} else if (number >= 40) {
  console.log("Very poor marks. You got D");
} else {
  console.log("Sorry, You failed.");
}

/* --------------- */

var amount = 9895;

if (amount >= 15000) {
  // 25% discount
  const discount = 0.25;
  var payingAmount = amount - amount * discount;
  console.log(
    "congratulations. You got a huge discount. After 25% discount your price is =",
    payingAmount
  );
} else if (amount >= 10000) {
  // 20% discount
  const discount = 0.2;
  var payingAmount = amount - amount * discount;
  console.log("After 20% discount your price is =", payingAmount);
} else if (amount >= 8000) {
  // 15% discount
  const discount = 0.15;
  var payingAmount = amount - amount * discount;
  console.log(" After 15% discount your price is =", payingAmount);
} else {
  console.log("You will get a pizzaburg cuppon for every purchase");
}

/* Ternary conditions / if-else er short-hand */
// condition ? true hoile ja hobe : false hole ja hobe;

var age = 28;
age >= 30
  ? console.log("you will get your digital id-card")
  : console.log("you need to wait");
