/* var money = 720;
let betAmount=500;
let bettingChance= 5;
if(money >=1000){
    console.log("You are rich");
    if(money >1000){
        console.log("We will go for a movie")
    }
    else{
        console.log("but bashay thako.")
    }
}
else if(money >=700){
    console.log("You are semi rich");
    if(money === 720){
        console.log("You are lucky mamma. go for bet");
        for(let i=1; i<=bettingChance; i++){
            betAmount *=i;
            console.log("The betting Amount will be  = ", betAmount);
        }

    }
}
else if(money >= 500){
    console.log("You are a fokira rich");
}
else{
    console.log("TUi Shala Goribss.");
    if(money>=300){
        console.log("Last ekta option ase");
    }
    else{
        console.log("Tui shala asholei ekta gorib..")
    }
} */


/* let friends =['allen', 'smith', 'blake', 'david', 'james'];
console.log(friends);
console.log(friends[2]);
console.log(friends.length);

var friend1= friends[0];
var friend2= friends[1];
var friend3= friends[2];
var friend4= friends[3];
var friend5= friends[4];
friend1= thomas;

console.log(friend1, '||', friend2, '||', friend3,'||', friend4,'||', friend5); */

// let friend1 = 'Allen';
// let friend2= 'Blake';
// let friend3= 'Smith';
// let friend4 = 'David';
// let friend5 = 'James';
let friend1={
    name: 'Allen Smith',
    age: 30,
    profession: 'engineer',
    country: 'USA',
    isCar: true,
    isHouse: false,
    isMarried: true,
    isCitizen: false,
    bankBalance: 30000
}
let friend2 ={
    name: 'David Blake',
    age: 33,
    profession: 'doctor',
    country: 'Canada',
    isCar: true,
    isHouse: true,
    isMarried: false,
    isCitizen: true,
    bankBalance: 39000
}
console.log(friend1, friend2);
console.log(friend1.name);

if(friend1.bankBalance+friend2.bankBalance >= 90000){
    console.log("They will go for a trip together");

}
else{
    console.log("They will get back to their works.");

    if(friend1.isCar === true && friend2.isHouse === true){
        console.log("There's another chance for a trip together");
    }
    else if(friend1.isMarried=== false || friend2.isCitizen===true){
        console.log("The will go for the trip next year.");
    }
    else{
        console.log("It's not the proper time, we will talk later")
    }
}
