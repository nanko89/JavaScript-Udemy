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

//LECTURE: Introduction to Arrays


