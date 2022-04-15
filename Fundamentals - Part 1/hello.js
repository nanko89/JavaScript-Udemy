//LECTURE: Values and Variables

const country = "Bulgaria";
const continent = "Europe";
let population = 6.923;

console.log(country, continent, population);

//LECTURE: Data Types

const isIsland = false;
let language = "Bulgarian";

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

const avgCountryPopulation = 33;
console.log(avgCountryPopulation < population);

let description = country + " is in " + continent + ", and its " + population +
    " million people speak " + language;

console.log(description);

//--------------------------------------------------------------------------------------------------------
// Coding Challenge #1
//BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
//TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

const weightMark = 78;
const heightMark = 1.69;

const weightJohn = 92;
const heightJohn = 1.95;

const markBMI = weightMark / heightMark ** 2;
const johnBMI = weightJohn / heightJohn ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

//TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

const weightM = 95;
const heightM = 1.88;

const weightJ = 85;
const heightJ = 1.76;

const BMIMark = weightM / heightM ** 2;
const BMIJohn = weightJ / heightJ ** 2;

const isMarkHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, isMarkHigherBMI);


//LECTURE: Strings and Template Literals

console.log(`${country} is in ${continent} and its ${population} million peaople speak ${language}`);


//LECTURE: Taking Decisions: if / else Statements

if (population > 33) {
    console.log(`${country}'s population is above average`)
} else {
    let avtPopulation = 33 - population;
    console.log(`${country}'s population is ${avtPopulation} million below average`)
}

population = 13;
if (population > 33) {
    console.log(`${country}'s population is above average`)
} else {
    let avtPopulation = 33 - population;
    console.log(`${country}'s population is ${avtPopulation} million below average`)
}

population = 130;
if (population > 33) {
    console.log(`${country}'s population is above average`)
} else {
    let avtPopulation = 33 - population;
    console.log(`${country}'s population is ${avtPopulation} million below average`)
}

population = 6.923;

//--------------------------------------------------------------------------------------------------------
//Coding Challenge #2
//TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's( ${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}

//TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}


//LECTURE: Type Conversion and Coercion

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143


//LECTURE: Equality Operators: == vs. ===


let numNeighbours = prompt("How many neighbour countries does your country have?");

//solid operator
if (numNeighbours == 1) {
    console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
    console.log(`More than 1 border`)
} else {
    console.log(`No borders`)
}

//loose operator
if (Number(numNeighbours) === 1) {
    console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
    console.log(`More than 1 border`)
} else {
    console.log(`No borders`)
}

//LECTURE: Logical Operators


//language = 'English';

if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`)
} else (
    console.log(`${country} does not meet your criteria :(`)
)

//--------------------------------------------------------------------------------------------------------
// Coding Challenge #3

//TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

let avgTeamDolphins = (96 + 108 + 89) / 3;
let avgTeamKoalas = (88 + 91 + 110) / 3;

if (avgTeamDolphins > avgTeamKoalas && avgTeamDolphins >= 100) {
    console.log(`Dolphins win the trophy 🏆!`)
} else if (avgTeamDolphins < avgTeamKoalas && avgTeamKoalas >= 100) {
    console.log(`Koalas win the trophy 🏆`)
} else if (avgTeamDolphins === avgTeamKoalas && avgTeamDolphins >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy 😭');
}
//TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

avgTeamDolphins = (97 + 112 + 101) / 3;
avgTeamKoalas = (109 + 95 + 123) / 3;

if (avgTeamDolphins > avgTeamKoalas && avgTeamDolphins >= 100) {
    console.log(`Dolphins win the trophy 🏆!`)
} else if (avgTeamDolphins < avgTeamKoalas && avgTeamKoalas >= 100) {
    console.log(`Koalas win the trophy 🏆`)
} else if (avgTeamDolphins === avgTeamKoalas && avgTeamDolphins >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy 😭');
}
//TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

avgTeamDolphins = (97 + 112 + 101) / 3;
avgTeamKoalas = (109 + 95 + 106) / 3;

if (avgTeamDolphins > avgTeamKoalas && avgTeamDolphins >= 100) {
    console.log(`Dolphins win the trophy 🏆!`)
} else if (avgTeamDolphins < avgTeamKoalas && avgTeamKoalas >= 100) {
    console.log(`Koalas win the trophy 🏆`)
} else if (avgTeamDolphins === avgTeamKoalas && avgTeamDolphins >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy 😭');
}

//LECTURE: The switch Statement

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4')
        break;
    case 'arabic':
        console.log('5th most spoken language')
        break;
    default:
        console.log('Great language too :D');
}

//LECTURE: The Conditional (Ternary) Operator

let infoCountry = population > 33 ? `${country}'s population is above average`
    : `${country}'s population is below average`;

console.log(infoCountry);

population = 13;

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`)

population = 130;

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`)

population = 6.923;

//--------------------------------------------------------------------------------------------------------
// Coding Challenge #4

//TEST DATA: Test for bill values 275, 40 and 430

let bill;
let tip;

bill = 275;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

bill = 40;
billAtLeast = bill >= 50 && bill <= 300 ? bill * 1.15 : bill * 1.20;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

bill = 430;
billAtLeast = bill >= 50 && bill <= 300 ? bill * 1.15 : bill * 1.20;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

