const avengers = ["thor", "ironman","spiderman"]
const justice = ["superman", "batman", "aquaman"]

// avengers.push(justice);

// console.log(avengers);
// console.log(avengers[3][1]);

// const collab = avengers.concat(justice)
// console.log(collab)

// const mergedHeroes = [...avengers,...justice]
// console.log(mergedHeroes)

const antArray = [1, 2, 3, [4, 5, 6], 7, [8, 9,[0, 1]]]
const real_antArray = antArray.flat(Infinity)

// console.log(real_antArray);
 
console.log(Array.isArray("fazil"))
console.log(Array.from("fazil"))
console.log(Array.from({name:"Fazil"}));// Interesting

let score1 = 100
let score2= 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

