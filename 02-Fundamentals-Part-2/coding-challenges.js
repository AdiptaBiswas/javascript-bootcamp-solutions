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

let bill = 40;
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

// Coding Challenge #6

var calcTip = (bill) => (bill >= 15 && bill <= 300 ? 0.15 * bill : 0.2 * bill);
console.log(calcTip(100));
let bills = new Array(125, 555, 44);
var tips = new Array();
let tempTip;
for (var i = 0; i < bills.length; i++) {
  tempTip = calcTip(bills[i]);
  tips.push(tempTip);
}
console.log(tips);
let total = new Array();
var tempTotal;
for (var i = 0; i < bills.length; i++) {
  tempTotal = bills[i] + tips[i];
  total.push(tempTotal);
}
console.log(total);

// Coding Challenge #7

const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(Mark.calcBMI());
console.log(John.calcBMI());
console.log(
  `${Mark.calcBMI()} > ${John.calcBMI()} ? Mark has a greater BMI of ${
    Mark.BMI
  } than ${John.BMI}.`
);

// Coding Challenge #8

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = new Array();
totals = new Array();
let tempTips;
for (let counter = 0; counter < bills.length; counter++) {
  if (bills[counter] >= 50 || bills[counter] <= 300) {
    tempTips = bills[counter] * 0.15;
    tips.push(tempTips);
    tempTips = bills[counter] + tempTips;
    totals.push(tempTips);
  } else {
    tempTips = bills[counter] * 0.2;
    tips.push(tempTips);
    tempTips = bills[counter] + tempTips;
    totals.push(tempTips);
  }
}
console.log(bills);
console.log(tips);
console.log(totals);
let sum = 0;
for (let i = 0; i < totals.length; i++) {
  sum += totals[i];
}
console.log(sum);
calcAverage = (sum, len) => sum / len;
console.log(calcAverage(sum, totals.length));
