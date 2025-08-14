/* 
    ****************Object declaration*************
    1. const objectName = {key1: value1, key2: value2}
    2. const objectName = new object();
    3. const objectName = object.create();
*/



const student ={
    name: 'Nayeem Hasan Shanto',
    id: 2314,
    isPassed: true,
    'fav subject': ['cse', 'mis', 'eee']
}

console.log(student);
console.log(student.id);// dot notation . dot diye object er property r man pawa jay.
// dot notation. (eta diye shob property access kora jay nah)
// third bracket notation. (special case hole bracket notation diye access korte hobe.)
console.log(student['name']);
console.log(student['fav subject']); 

console.log(Object.keys(student));
console.log(Object.values(student));

for(const learner in student){
    console.log(learner);
    console.log(student[learner]);
}


const car= new Object();
console.log(car);
const house = Object.create({});
console.log(house); 

