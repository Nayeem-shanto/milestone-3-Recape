
var husband ={
    name: 'Nayeem Hasan Shanto',
    age: 28,
    profession: 'Web-Developer',
    isMarried: true,
    isBike: true,
    isHouse: true,
    budgetForTrip: 20000,
    preferredDestination: ['cox-bazar', 'sylhet', 'sajek']
}
var wife ={
    name: 'Afsana Begum Sristy',
    age: 26,
    profession: 'Accountant',
    isMarried: true,
    isBike: true,
    isHouse: true,
    budgetForTrip: 15000,
    preferredDestination: ['sreemangal', 'rangamati', 'sajek']
}
var sister ={
    name: 'Nusrat jahan',
    age: 19,
    profession: 'Student',
    isMarried: false,
    isBike: false,
    isHouse: true,
    budgetForTrip: 5000,
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
console.log("*******************Our Next Trip Planer********************")
let totalTripBudget = (husband.budgetForTrip+wife.budgetForTrip+sister.budgetForTrip+shali1.budgetForTrip+shali2.budgetForTrip);
console.log("Total Budget for their next trip is =", totalTripBudget);