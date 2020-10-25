// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(arr1, arr2) {
  let beatlesLove = [];
  for (let counter = 0; counter < arr1.length; counter++) {
    beatlesLove.push(`${arr1[counter]} plays ${arr2[counter]}`);
  }
  return beatlesLove;
}
console.log(theBeatlesPlay(musicians, instruments));

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(arr) {
  let i = 0;
  let exclamationArray = [];
  while(arr[i] < arr[arr.length]) {
    exclamationArray.push(arr[i] + "!!!");
  }
  return exclamationArray;
}
console.log(johnLennonFacts(facts));

function iLoveTheBeatles(num) {
  let love = [];
  do {
    love.push("I love the Beatles!");
  }
  while (num < 15);
  num++;
  return love;
}

console.log(iLoveTheBeatles(10));