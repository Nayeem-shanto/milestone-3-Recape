var husband = {
  name: "Nayeem Hasan Shanto",
  age: 28,
  profession: "Web-Developer",
  isMarried: true,
  isBike: true,
  isHouse: true,
  budgetForTrip: 5000,
  preferredDestination: ["cox-bazar", "sylhet", "sajek"],
};
var wife = {
  name: "Afsana Begum Sristy",
  age: 26,
  profession: "Accountant",
  isMarried: true,
  isBike: true,
  isHouse: true,
  budgetForTrip: 7000,
  preferredDestination: ["sreemangal", "rangamati", "sajek"],
};
var sister = {
  name: "Nusrat jahan",
  age: 19,
  profession: "Student",
  isMarried: false,
  isBike: false,
  isHouse: true,
  budgetForTrip: 7000,
  preferredDestination: ["cox-bazar", "tanguar-haor", "sajek"],
};
var shali1 = {
  name: "Tasifa Modina",
  age: 22,
  profession: "Student",
  isMarried: false,
  isBike: false,
  isHouse: false,
  budgetForTrip: 8000,
  preferredDestination: ["chittagoang", "khulna", "sajek"],
};
var shali2 = {
  name: "Labiba Hossain Labbayk",
  age: 14,
  profession: "student",
  isMarried: false,
  isBike: false,
  isHouse: false,
  budgetForTrip: 2000,
  preferredDestination: ["cox-bazar", "tangail", "sajek"],
};
let dayTrip = {
  place: "Shuborno-Gram",
  personPerPackage: 5,
  budgetPerPerson: 1500,
  isWeekEnd: true,
  foodItem: {
    breakFast: [],
    lunch: [],
    snacks: [],
    dinner: [],
  },
  activities: {
    isPlayZone: true,
    isSwimmingPool: true,
    isOutDoorGames: true,
  },
};
console.log("*******************Our Next Trip Planer********************");
let totalTripBudget =
  husband.budgetForTrip +
  wife.budgetForTrip +
  sister.budgetForTrip +
  shali1.budgetForTrip +
  shali2.budgetForTrip;
console.log("Total Budget for their next trip is =", totalTripBudget, "Taka");

// tour condition
if (totalTripBudget >= 55000) {
  console.log("We will go to Cox's Bazar");
} else if (totalTripBudget >= 40000) {
  if (sister.budgetForTrip + shali1.budgetForTrip === 15000) {
    console.log("We will go for where you guys want.");
  } else {
    console.log("We will go next time");
  }
} else {
  console.log("We will go our long trip next year in sha Allah.");
  console.log("Let's go for a day long trip near about dhaka city.");
  console.log(dayTrip);
}
// item includes to the daytrip object breakfast array.
dayTrip.foodItem.breakFast.push("Bread & Butter");
dayTrip.foodItem.breakFast.push("Beef-Khichuri");
dayTrip.foodItem.breakFast.push("Plain Porota with butter dal");
dayTrip.foodItem.breakFast.push("Chicken Soup");
dayTrip.foodItem.breakFast.push("Custard");
dayTrip.foodItem.breakFast.push("Fresh Fruit");
dayTrip.foodItem.breakFast.push("Juice");
dayTrip.foodItem.breakFast.push("Tea & Coffee");
console.log("Our best breakfast combo package.",dayTrip.foodItem.breakFast);

// item include to the lunch array

dayTrip.foodItem.lunch.push('Special-Buffet');
console.log("Our special Buffet Lunch",dayTrip.foodItem.lunch);
// item include to the snacks 
dayTrip.foodItem.snacks.push('noodles');
dayTrip.foodItem.snacks.push('Pasta');
dayTrip.foodItem.snacks.push('puri');
dayTrip.foodItem.snacks.push('pakoraa');
dayTrip.foodItem.snacks.push('coffee');
console.log("Our Snacks menu", dayTrip.foodItem.snacks);

// item include to the dinner

dayTrip.foodItem.dinner.push('Special BBQ');
console.log("Our Special Dinner BBQ",dayTrip.foodItem.dinner);

for(let i=1; i<= dayTrip.personPerPackage; i++){
if(dayTrip.budgetPerPerson<=1500){
    console.log("We will go and enjoy our day");
}
else{
    console.log("Otherwise we will go another place.");
}
}