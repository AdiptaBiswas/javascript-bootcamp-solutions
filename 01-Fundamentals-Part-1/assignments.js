// JavaScript Fundamentals – Part 1

// LECTURE: Values and Variables

const country = "India";
const continent = "Asia";
var population = 140;
console.log(
  "I live in " +
    country +
    ". It lies in the central-eastern part of " +
    continent +
    " with a population of approx. " +
    String(population) +
    " crore."
);

// LECTURE: Data Types

const isIsland = false;
var language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: let, const and var

language = "Bengali";
/* country = "Pakistan";
assignments.js:30 Uncaught TypeError: Assignment to constant variable.
*/

// LECTURE: Basic Operators

var halfPop = population / 2;
console.log(
  `There will be ${halfPop} crore people in each half of ${country}.`
);
population++;
console.log(population);
var FinlandPopulation = 6000000;
console.log(
  10000000 * population > FinlandPopulation
    ? `${country}'s population is more than Finland's.`
    : `Finland's population is more than ${country}'s.`
);
var averagePopulation = 33000000;
console.log(
  10000000 * population > averagePopulation
    ? `${country}'s population is more than the average population.`
    : `${country}'s population is less than the average population.`
);
var description = `${country} is in ${continent} and some of it's ${population} crore population speak ${language}.`;
console.log(description);

// LECTURE: Strings and Template Literals
// Same as above

// LECTURE: Taking Decisions: if / else Statements

if (population * 10000000 > averagePopulation)
  console.log(`${country}'s population is more than the average population.`);
else `${country}'s population is less than the average population.`;

// LECTURE: Equality Operators: == vs. ===

let numNeighbours = Number(
  prompt("How many neighbour countries does your country have? ")
);
if (numNeighbours === 1) console.log("Only 1  border!");
else if (numNeighbours > 1) console.log("More than 1 borders!");
else console.log("No border!");

// LECTURE: Logical Operators

if (language === "English" && population * 10000000 < 50000000 && !isIsland)
  console.log(`${country} is perfect for you to live.`);
else console.log(`${country} does not meet your criteria :(`);

// LECTURE: The switch Statement

language = "Chinese";
switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("Most number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("4th place");
    break;
  default:
    console.log("It's is a great language :D");
}
language = "Bengali";
