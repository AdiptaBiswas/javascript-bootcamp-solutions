// JavaScript Fundamentals – Part 2

// LECTURE: Functions

let India = describeCountry("India", 140, "Delhi");
let Pakistan = describeCountry("Pakistan", 40, "Islamabad");
let China = describeCountry("China", 150, "Bejing");
console.log(India);
console.log(Pakistan);
console.log(China);
function describeCountry(country, population, capital) {
  console.log(
    `${country} has ${population} crore people and its capital city is ${capital}.`
  );
}

// LECTURE: Function Declarations vs. Expressions

function percentageOfWorld1(population) {
  let totalWorld = 7900000000;
  return (population / totalWorld) * 100;
}
var IndiaPopulation = 1400000000;
console.log(
  `India's World Population Percentage is ${percentageOfWorld1(
    IndiaPopulation
  )}`
);
var PakistanPopulation = 400000000;
console.log(
  `Pakistan's World Population Percentage is ${percentageOfWorld1(
    PakistanPopulation
  )}`
);
let percentageOfWorld2 = function (population) {
  let totalWorld = 7900000000;
  return (population / totalWorld) * 100;
};
console.log(
  `India's World Population Percentage is ${percentageOfWorld2(
    IndiaPopulation
  )}`
);
let percentageOfWorld3 = (population) => {
  let totalWorld = 7900000000;
  return (population / totalWorld) * 100;
};
console.log(
  `India's World Population Percentage is ${percentageOfWorld3(
    IndiaPopulation
  )}`
);

// LECTURE: Functions Calling Other Functions

function describePopulation(country, population) {
  popPercent = percentageOfWorld2(population);
  population = population / 10000000;
  console.log(
    `${country} has ${population} crore population, which is ${popPercent}% of the World Population.`
  );
}
describePopulation("India", IndiaPopulation);
