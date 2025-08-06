
var husband ={
    name: 'Nayeem Hasan Shanto',
    age: 28,
    profession: 'Web-Developer',
    isMarried: true,
    isBike: true,
    isHouse: true,
    budgetForTrip: 5000,
    preferredDestination: ['cox-bazar', 'sylhet', 'sajek']
}
var wife ={
    name: 'Afsana Begum Sristy',
    age: 26,
    profession: 'Accountant',
    isMarried: true,
    isBike: true,
    isHouse: true,
    budgetForTrip: 7000,
    preferredDestination: ['sreemangal', 'rangamati', 'sajek']
}
var sister ={
    name: 'Nusrat jahan',
    age: 19,
    profession: 'Student',
    isMarried: false,
    isBike: false,
    isHouse: true,
    budgetForTrip: 7000,
    preferredDestination: ['cox-bazar', 'tanguar-haor', 'sajek']
}
var shali1 ={
    name: 'Tasifa Modina',
    age: 22,
    profession: 'Student',
    isMarried: false,
    isBike: false,
    isHouse: false,
    budgetForTrip: 8000,
    preferredDestination: ['chittagoang', 'khulna', 'sajek']
}
var shali2 ={
    name: 'Labiba Hossain Labbayk',
    age: 14,
    profession: 'student',
    isMarried: false,
    isBike: false,
    isHouse: false,
    budgetForTrip: 2000,
    preferredDestination: ['cox-bazar', 'tangail', 'sajek']
}
let dayTrip={
    place: 'Shuborno-Gram',
    budget: 5000,
    isWeekEnd:true,
   foodItem:{
        breakFast: [],
        lunch: [],
        snacks: [],
        dinner: [],
    },
    activities:{
        isPlayZone:true,
        isSwimmingPool: true,
        isOutDoorGames:true
    }
}
console.log("*******************Our Next Trip Planer********************")
let totalTripBudget = (husband.budgetForTrip+wife.budgetForTrip+sister.budgetForTrip+shali1.budgetForTrip+shali2.budgetForTrip);
console.log("Total Budget for their next trip is =", totalTripBudget, 'Taka');

// tour condition
if(totalTripBudget >= 55000){
    console.log("We will go to Cox's Bazar");
}
else if(totalTripBudget >=40000){
    if(sister.budgetForTrip + shali1.budgetForTrip === 15000){
        console.log("We will go for where you guys want.");
    }
    else{
        console.log("We will go next time");
    }
}
else{
    console.log("We will go our long trip next year in sha Allah.");
    console.log("Let's go for a day long trip near about dhaka city.");
    console.log(dayTrip);

    }

