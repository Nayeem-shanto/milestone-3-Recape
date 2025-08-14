// Array - eta ekta special type er object ja ekta single variable nam diye onek gula value store kore.
// array check korar jonno --> Array.isArray(variableName);
// typeof array diye check korte gele object dekhabe. karon array hocche object er ekta structure.
// array te value gula shob index onujai thake. index start hoy o theke.
// araay[index] diye oi array r oi poistion er value pawa jay.
// push - array te value add hobe but akdom last e.
// pop - array theke value remove hobe . last value ta remove hobe.
// unshift- array r ekdom first e value add hobe.
// shift - array r ekdom first er value remove hobe.
// slice --> array.slice(koto index theke shuru hoye, koto index er age porjonto slice hobe)==>> array.slice(3, 7);
// splice --> array.splice(start number, koyta value delete hobe tar number)
//  array r moddhe kono ekta upadan ase kina sheta check kroar jonno .includes use korte hoy. eta case sensitive.
// indexof()--> value r position pawa jay.
// join()--> value ek sathe kore.
// concat()--> 2 ta array jora lagay

 
 
 
 
 
 
 
 
 
 const name = "Nayeem Hasan Shanto";
console.log(name);
const numbers = [12, 45, 67, 87, 35, 95, 29, 33, 56, 72, 61];
console.log(numbers);
for(const num of numbers){
    console.log(num);
}
console.log(Array.isArray(numbers));
// console.log(Array.isArray(num));

console.log(typeof(numbers));
console.log(numbers.length);
numbers.push(343);
console.log(numbers[9]);
console.log(numbers);
 numbers[5]= 987;
 numbers.push(444);
 numbers.push(786);
 numbers.pop();
 numbers.pop();
 numbers.pop();
 console.log(numbers);

 const ages = [28,30,33];
//  ages.pop();
//  ages.pop();
//  ages.pop();
 

 console.log(ages);
 console.log(ages.includes(33));
console.log(numbers.join('|||'))
console.log(numbers.concat(ages));
console.log(numbers.slice(3,7));
console.log(numbers.splice(2,2));
console.log(ages.splice(1));

