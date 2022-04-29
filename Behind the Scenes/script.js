'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1998) {
      //Create NEW variable with same name as outer scope's variable
      const firstName = 'George';

      //Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      var millenial = true;
      const str = `Oh, and you are a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
  }

  printAge();
  return age;
}

const firstName = 'Natalie';
calcAge(1989);

//Hoistings and TDZ in Practice

/* 
We can't show on the console variable before we declareded 
console.log(job);
console.log(year);
Return on the console undirfined
console.log(me);
 */

var me = 'Natalie';
let job = 'student';
const year = '1989';

//Functions

console.log(addDecl(1, 2)); // return result
/*
    We can't show on the console variable before we declareded 
console.log(addExpr(1, 2));
console.log(addArrow(1, 2)); 
*/

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
