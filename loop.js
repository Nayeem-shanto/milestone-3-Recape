/* Let's learn te loop in javascript */

// 1. for loop. (loop koto porjonto cholbe jodi bola thake.)
// 2. while loop. (condition er sapekkhe cholbe.)
// 3. Do-While-loop.( condition jai hok na keon eta ekbar cholbei.)
// 4. for-of. (array te use kora hoy)
// 5. for-in. (object e use kora hoy)
// 6. for-each.


/* for loop */

// var count= 20;
// for(var i=1; i<=count; i++){
//     console.log(i, "I Love You", i);
// }

// var number=21;
// if(number%2 ===0){
//     console.log("The given number is even number")
// }
// else{
//     console.log("The given number is a odd number");
// }
// let number = 35;
// if(number % 5 === 0){
//     console.log("divisible by 5");
// }
// else{
//     console.log("Not divisible by 5");
// }


// let number=20;
// for(let i=1; i<=number; i=i+2){
//     console.log(i)
// }

// let number =20;
// for(let i=2; i<=number; i=i+2){
//     console.log(i)
// }

// let number=20;
// let sum=number;
// for(let i=1; i<=number; i++){
//     if(i % 2=== 0){
//         console.log("even number", i);
//         break;
//     }
//     else{
//         console.log("odd Number", i)
//     }
// }


// var number =55;
// while(number <= 50){
//     if(number % 2=== 0){
//         console.log("even");
//         number++;
//     }
//     else{
//         console.log("Odd");
//     }
// }

// var number=10;
// var sum= number;
// for(let i=1; i<=10; i++){
//     var sum= i+1;
//     console.log("The sum is = ", sum)
// }





// var count = 5;
// for(let i=1; i<=count; i++){
//     console.log("I love You", i);
// }

var staringSalary = 45000;
var increment = .15;
var experience = 20;

var currentSalary = staringSalary;

// currentSalary = (staringSalary +(staringSalary*increment));
// console.log(currentSalary);

for(let i=1; i<=experience; i++){
    currentSalary= (currentSalary +(currentSalary*increment));

}
console.log(currentSalary.toFixed(2));


for(let i=1; i<2; i++){
    console.log("  *  ");
    for(let i2=2; i2<3; i2++){
        console.log(" ** ");
    }
    
    for(let i3=3; i3<4; i3++){
        console.log(" ***  ");
    }
}
