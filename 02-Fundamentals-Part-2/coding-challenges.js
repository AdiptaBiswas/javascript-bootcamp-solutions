//Coding Challenge #1

let markMass = 78;
let markHeight = 1.69;
let johnHeight = 1.95;
let johnMass = 92;
let markBMI;
markBMI = markMass / markHeight ** 2;
let johnBMI;
johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI;
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// Coding Challenge #2

if (markHigherBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
}

// Coding Challenge #3

let avgDolphins = (97 + 112 + 101) / 3;
let avgKoalas = (109 + 95 + 106) / 3;
if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log("Dolphins won the trophy");
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
  console.log("Koalas won the trophy");
} else {
  if (avgKoalas == avgDolphins && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log("Both teams have won the trophy");
  } else {
    console.log("No teams have won the trophy");
  }
}

// Coding Challenge #4

const bill = 40;
let tip;
tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total amount is ${
    bill + tip
  }`
);

// Coding Challenge #5

let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// Data 1
// avgDolphins = calcAverage(44, 23, 71);
// avgKoalas = calcAverage(65, 54, 49);
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);
function checkWinner(dolph, koal) {
  if (dolph > 2 * koal) console.log(`Dolphins win (${dolph} vs. ${koal})`);
  else if (koal > 2 * dolph) console.log(`Koalas win (${koal} vs. ${dolph})`);
  // else if (koal === dolph) console.log(`Both teams tied!`);
  else console.log(`No teams win!`);
}
