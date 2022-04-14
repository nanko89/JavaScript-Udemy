//LECTURE: Values and Variables

const country = "Bulgaria";
const continent = "Europe";
let population = 6.923;

console.log(country, continent, population);

//LECTURE: Data Types

const isIsland = false;
const language = "Bulgarian";

console.log(isIsland + " " + population + " " + country + " " + language)

//LECTURE: let, const and var

/*const country = "Bulgaria";
const continent = "Europe";
const isIsland = false;
const language = "Bulgarian";*/


//LECTURE: Basic Operators

let peopleLiveInHalfCountry = population / 2;
console.log("Peolpe live in each half country " + peopleLiveInHalfCountry)

population++;
console.log(population);

let populationOfFinland = 6;
console.log(populationOfFinland < population);

let avgCountryPopulation = 33;
console.log(avgCountryPopulation < population);

let description = country + " is in " + continent + ", and its " + population +
    " million people speak " + language;

console.log(description);
console.log(descriptionCountry);

// Coding Challenge #1
//BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
//TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

const weightMark = 78;
const heightMark = 1.69;

const weightJohn = 92;
const heightJohn = 1.95;

let markBMI = weightMark / heightMark ** 2;
let johnBMI = weightJohn / heightJohn ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

//TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

const weightM = 78;
const heightM = 1.69;

const weightJ = 92;
const heightJ = 1.95;

let BMIMark = weightM / heightM ** 2;
let BMIJohn = weightJ / heightJ ** 2;

let isMarkHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, isMarkHigherBMI);


//LECTURE: Strings and Template Literals

let descriptionCountry = `${country} is in ${continent} and its ${population} million peaople speak ${language}`;


//LECTURE: Taking Decisions: if / else Statements
