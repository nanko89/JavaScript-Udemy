'use strict';

//Coding Challenge #1
let output = '';
function printForecast(array) {
  for (let i = 0; i < array.length; i++) {
    output += `${array[i]}°C in ${i + 1} days... `;
  }
}

//Data 1: [17, 21, 23]
const temperature = [17, 21, 23];

//Data 2: [12, 5, -5, 0, 4]
const temperature2 = [12, 5, -5, 0, 4];

printForecast(temperature);

console.log(output);
output = '';
printForecast(temperature2);

console.log(output);
