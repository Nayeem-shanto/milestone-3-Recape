// lets do some simple mathematical XPathExpression **************************

/* Addition */

var num1 = 800;
var num2 = parseInt('450');
var num3= 100;

var addition =( num1 + num2 + num3)
console.log("The addition of three number is =",addition);

/* Subtraction */

var num1 = 1800;
var num2 = parseInt('450');
var num3= parseFloat('456.34');

var Subtraction =(num1 - num2 - num3)
console.log("The subtraction of three number is =", Subtraction.toFixed(2));

/* Multiplication */

var num1 = 1800;
var num2 = parseInt('450');
var num3= parseFloat('456.34');

var Multiplication =(num1 * num2 * num3)
console.log("The multiplication of three number is =", Multiplication.toFixed(2));

/* Division */

var num1 = 1800;
var num2 = parseInt('450');
var num3= parseFloat('456.34');

var Division =(num1 / num2 / num3)
console.log("The division of three number is =", Division.toFixed(2));

/* Modulus */

var n1= 250;
var n2= 53;
var result= (n1%n2);
console.log("the modulus of two number is =", result);


/* shorol math */
var number1= 150;
var number2= parseInt('38');
var number3= parseFloat('1.26');
var number4= 31;

var result =(number1*number3+number2*number4-number1/number3);
console.log("The result is =", result.toFixed(3));



console.log(40+'30'); //jodi kono ekta string hoy taile puratai string hoye jabe.
console.log(40-'30');
console.log(40*'30');
console.log(40/'30');