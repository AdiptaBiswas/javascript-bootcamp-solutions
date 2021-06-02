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

// LECTURE: Introduction to Arrays

let populations = new Array(1400000000, 30000000, 75000000, 3600000);
console.log(populations.length === 4);
let percentages = [];
var totalWorld = 7900000000;
var tempPerc;
for (var i = 0; i < populations.length; i++) {
  tempPerc = (populations[i] / totalWorld) * 100;
  percentages.push(tempPerc);
}
console.log(percentages);

// LECTURE: Basic Array Operations (Methods)

let neighbours = [
  "Pakiatan",
  "Nepal",
  "Bangladesh",
  "SriLanka",
  "Bhutan",
  "Afghanistan",
  "Mayanmar",
];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop("Utopia");
console.log(neighbours);
console.log(
  neighbours.includes("Germany") == false
    ? "Probably not a central European country :D"
    : "A central Euopean country :)"
);
neighbours[neighbours.indexOf("Bangladesh")] = "Republic of Independent Bengal";
console.log(neighbours);

// LECTURE: Introduction to Objects

myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 1400000000,
  neighbours: [
    "Pakistan",
    "Bangladesh",
    "Nepal",
    "Bhutan",
    "SriLanka",
    "Mayanmar",
    "Afghanistan",
  ],
};
console.log(myCountry);

// LECTURE: Dot vs. Bracket Notation

console.log(
  `${myCountry["country"]} has a capital ${myCountry.capital} with a majority of ${myCountry.language} speakers.
${myCountry.country} has ${myCountry["neighbours"].length} borders.`
);

// LECTURE: Object Methods

myCountry.checkIsIsland = () => {
  let isIsland;
  if (myCountry.neighbours.length != 0) isIsland = false;
  else isIsland = true;
  return isIsland;
};
console.log(myCountry.checkIsIsland());

// LECTURE: Iteration: The for Loop

for (voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

// LECTURE: Looping Arrays, Breaking and Continuing (Some other example done)

let arr1 = [12, 24, 36, 48];
let arr2 = [3, 6, 9, 12];
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] % arr2[j] == 0)
      console.log(`${arr1[i]} is divisible by ${arr2[j]}`);
    else console.log(`${arr1[i]} is not divisible by ${arr2[j]}`);
  }
}
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] % arr2[j] == 0)
      console.log(`${arr1[i]} is divisible by ${arr2[j]}`);
    else continue;
  }
}

// LECTURE: Looping Backwards and Loops in Loops

listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}
