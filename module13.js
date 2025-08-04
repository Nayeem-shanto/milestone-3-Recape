// learn about the javascript variable.
// variable hoccche ekta container jar moddhe value store kore rakha hoy.
// variable er ekta nam thake and ekta man thake.
// variable declaration:
// var name = "Shanto";
// var age = 28;
// const pi = 3.2416.
/* 
    var--- eta purano type.(মান চেঞ্জ করা যায়।)
    let--- eta use korbo.(মান চেঞ্জ করা যায়।)
    const--- etao use korbo. (মান চেঞ্জ করা যায় না।)

*/
// Data Type of variable-----------------------------
/* 
    1. primitive data type-----****
            number.
            string.
            boolean.
            null.
            undefine.
            bigint.
            symbol.
    2. non-primitive data type-----**
            array.
            object.
            function.

*/

/* 
    ********Naming Convention*******
    1. camelCase.(prothom ta bade shob gula word er first letter capital.)
    2. PascalCase.(shob gula word er first letter capital.)
    3. snake_case. (shob small letter hobe and word er moddhe underscore thakbe.)
    4. kebab-case. (shob small letter and word er moddhe thakbe highfen).
    5. UPPERCASE_SNAKE_CASE. (SHOB CAPITAL LETTER AND UNDERSCORE.)

*/


/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */



var name ='Nayeem Hasan Shanto'; //single or double quation use kora jay. eta holo ekta string type er variable. 
console.log(name);
var age = 28; //number type variable.
var haveBike = true; // boolean type variable.
var id; // ekhane value hocce undefine.
var id2=null; // ekhane value forcefully null.
console.log(age, haveBike);

console.log("your age is " , "=", age) //comma use korle word er moddhe auto space hoye jay. 
console.log("your age is " + " = " + age) //+ dile space er dorkar hole extra space dite hoy. 

console.log(typeof(age));
console.log(typeof(haveBike));
console.log(typeof(name));
console.log(typeof(id));
console.log(typeof(id2)); // typeof null object return kore.


var applePrice = 780;
var orangePrice = '680';
console.log(typeof(orangePrice));
var totalPrice =(parseInt(applePrice)+parseInt(orangePrice));
console.log(totalPrice);


var first = 15.7653;
var second = 3.963867;

var sum = (parseInt(first)+parseInt(second));
console.log(sum.toFixed(3));







