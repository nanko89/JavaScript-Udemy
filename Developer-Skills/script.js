'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

let max = temperatures[0];
let min = temperatures[0];

for (let i = 0; i < temperatures.length; i++) {
  if (typeof temperatures[i] === 'number') {
    if (max < temperatures[i]) max = temperatures[i];
    if (min > temperatures[i]) min = temperatures[i];
  }
}

console.log(
  `Max temperature is ${max}°C and min temperature is ${min}°C for a day `
);

let amplitute = max - min;

console.log(`Temperature amplitude is ${amplitute}`);

//-----------------------------------------------------------------------------------
// PROBLEM 2:
// Function should now receive 2 arrays of temps

const calcTempAmplitude = function (a1, a2) {
  const temps = a1.concat(a2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (max < temps[i]) max = temps[i];
    if (min > temps[i]) min = temps[i];
  }

  console.log(
    `Max temperature is ${max}°C and min temperature is ${min}°C for a day `
  );

  return max - min;
};

amplitute = calcTempAmplitude([1, -6, 19], [0, 30, -12]);
console.log(amplitute);

//-----------------------------------------------------------------------------------
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
