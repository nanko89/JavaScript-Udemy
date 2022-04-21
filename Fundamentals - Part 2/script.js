'use strict';
//LECTURE: Functions

function describeCountry(country, population, capitalCity) {

    let description = `${country} has ${population} million people and its capital city is ${capitalCity}`

    return description
}

const infoBularia = describeCountry('Bulgaria', 6.9, 'Sofia');
const infoFrance = describeCountry('France', 67.4, 'Paris');
const infoEngland = describeCountry('England', 56, 'London');

console.log(infoBularia);
console.log(infoFrance);
console.log(infoEngland);

//LECTURE: Function Declarations vs. Expressions

function percentageOfWorld1(population) {
    const wordPoplulation = 7900;
    return population / wordPoplulation * 100
}

let populationOfBulgaria = percentageOfWorld1(6.9);
let populationOfFrance = percentageOfWorld1(67.4);
let populationOfEngland = percentageOfWorld1(56);


console.log(populationOfBulgaria);
console.log(populationOfFrance);
console.log(populationOfEngland);


let percentageOfWorld2 = function (population) {
    const wordPoplulation = 7900;
    return population / wordPoplulation * 100
}

populationOfBulgaria =
    `Bulgaria has 6.9 million people, so it's about ${percentageOfWorld2(6.9)}% of the world population`;
populationOfFrance =
    `France has 67.4 million people, so it's about ${percentageOfWorld2(67.4)}% of the world population`;
populationOfEngland =
    `England has 56 million people, so it's about ${percentageOfWorld2(56)}% of the world population`;


console.log(populationOfBulgaria);
console.log(populationOfFrance);
console.log(populationOfEngland);

//LECTURE: Arrow Functions

let percentageOfWorld3 = population => population / 7900 * 100;

console.log(`Bulgaria has 6.9 million people, so it's about ${percentageOfWorld3(6.9)}% of the world population`);

console.log(`France has 67.4 million people, so it's about ${percentageOfWorld2(67.4)}% of the world population`);

console.log(`England has 56 million people, so it's about ${percentageOfWorld2(56)}% of the world population`);

//LECTURE: Functions Calling Other Functions

function describePopulation(country, population) {

    const percentPopulation = percentageOfWorld1(population);

    return `${country} has ${population} million people, which is about ${percentPopulation}% of the world.`
}

console.log(describePopulation('Bulgaria', 6.9));
console.log(describePopulation('France', 67.4));
console.log(describePopulation('England', 56));

//-------------------------------------------------------------------------------
//Coding Challenge #1

const calcAverage = (first, second, third) => (first + second + third) / 3;

// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

const avgDolhins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// const avgDolhins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

console.log(avgDolhins, avgKoalas);

function checkWinner(dolhins, koalas) {
    if (koalas >= dolhins * 2) {
        return `Koalas win (${koalas} vs. ${dolhins})`
    } else if (dolhins >= koalas * 2) {
        return `Dolhins win (${dolhins} vs. ${koalas})`
    } else {
        return `No one wins ...`
    }
}

console.log(checkWinner(avgDolhins, avgKoalas));

//LECTURE: Introduction to Arrays

const popBulgaria = percentageOfWorld1(6.9);
const popFrance = percentageOfWorld1(67.4);
const popEngland = percentageOfWorld1(56);
const popChina = percentageOfWorld1(1150);

const populations = new Array(6.9, 67.4, 56, 1150);

console.log(populations.length === 4);

const percentages = new Array(popBulgaria, popFrance, popEngland, popChina);

console.log(percentages);

//LECTURE: Basic Array Operations (Methods)

const neighbours = ['Romania', 'Serbia', 'Macedonia', 'Greece', 'Turkey'];

neighbours.push('Utopia');
neighbours.pop();

if (neighbours.includes('Germany')) {
    console.log('Yeah your county is in central Europe :D')
} else {
    console.log('Probably not a central European country :D')

}

const indexOfMacedonia = neighbours.indexOf('Macedonia');

neighbours[indexOfMacedonia] = 'Republic of Macedonia'

console.log(neighbours);

//-------------------------------------------------------------------------------
//Coding Challenge #2

const bills = [125, 555, 44];

function calcTip(currentBill) {
    if (currentBill >= 50 && currentBill <= 300) {
        return 15;
    } else {
        return 20;
    }
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const totalValue = [bills[0] * ((tips[0] / 100) + 1),
bills[1] * ((tips[1] / 100) + 1),
bills[2] * ((tips[2] / 100) + 1)];

console.log(totalValue);

//LECTURE: Introduction to Objects

const myCountry = {
    country: 'Bulgaria',
    capital: 'Sofia',
    language: 'bulgarian',
    population: 6.95,
    neighbours: ['Romania', 'Greece', 'Turkey', 'Macedonia', 'Serbia']
};
console.log(myCountry);

//LECTURE: Dot vs. Bracket Notation

const info = `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}`

console.log(info);


myCountry.population = myCountry.population + 2;
console.log(myCountry);

myCountry['population'] = myCountry.population - 2;
console.log(myCountry);

//LECTURE: Object Methods

const myCountry2 = {
    country: 'Bulgaria',
    capital: 'Sofia',
    language: 'bulgarian',
    population: 6.95,
    neighbours: ['Romania', 'Greece', 'Turkey', 'Macedonia', 'Serbia'],

    describe: function () {
        console.log(
            `${this.country} has ${this.population} million 
    ${this.language}-speaking people, 
    ${this.neighbours.length} neighbouring countries and a 
    capital called ${this.capital}.`
        );
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true :
            false;
    }
};

myCountry2.describe();
myCountry2.checkIsland();
console.log(myCountry2);

//-------------------------------------------------------------------------------
//Coding Challenge #3
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

const markBmi = mark.calcBMI();
const johnBmi = john.calcBMI();

if (johnBmi > markBmi) {
    console.log(`${john.firstName}'s BMI (${johnBmi}) is higher than ${mark.firstName}'s (${markBmi})!`);
} else if (johnBmi < markBmi) {
    console.log(`${mark.firstName}'s BMI (${markBmi}) is higher than ${john.firstName}'s (${johnBmi})`);
}

<<<<<<< HEAD
//LECTURE: Iteration: The for Loop

for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`)
}

//LECTURE: Looping Arrays, Breaking and Continuin

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {

    percentages2.push(percentageOfWorld1(populations[i]))
}

console.log(percentages2);

//LECTURE: Looping Backwards and Loops in Loops

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {

    const currentNeigours = listOfNeighbours[i];

    for (let j = 0; j < currentNeigours.length; j++) {

        console.log(`Neighbour: ${currentNeigours[j]}`)
    }
}

//LECTURE: The while Loop

const percentages3 = [];

let length = 0;

while (length < populations.length) {

    percentages3.push(percentageOfWorld1(populations[length++]));

}

console.log(percentages3);

//-------------------------------------------------------------------------------
//Coding Challenge #4
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

function calcTip(currentBill) {
    if (currentBill >= 50 && currentBill <= 300) {
        return 0.15 * currentBill;
    } else {
        return 0.20 * currentBill;
    }
}

const billsTen = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsT = [];
const totals = [];

for (let i = 0; i < billsTen.length; i++) {

    const curentTip = calcTip(billsTen[i]);

    tipsT.push(curentTip);

    totals.push(curentTip + billsTen[i]);
}

console.log(billsTen, tipsT, totals);

function arr(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += billsTen[i];
    }

    return sum / billsTen.length;
}

console.log(arr(billsTen));
=======
 //LECTURE: Iteration: The for Loop

for (let i = 1; i <= 50; i++) {
        console.log(`Voter number ${i} is currently voting`)
}

//LECTURE: Looping Arrays, Breaking and Continuing
>>>>>>> 1b0bc9e9288dd5ecaba3dddb319ed08d3462c1f2
