/* const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer','gunner']

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

for(let subreddit of subreddits) {
    //console.log(sub)
    console.log(`Visit reddit.com/r/${subreddit}`)
} */
/* const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio','Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
] */

/* for (let i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++){
        console.log(row[j]);
    }
} */

// for(let row of seatingChart){
//     for (let student of row) {
//         console.log(student);
//     }
// }

// for (let char of "hello world") {
//     console.log(char)
// }

/* const numbers = [1,2,3,4,5,6,7,8,9];

for (let number of numbers) {
    console.log(number*number);
} */

const testScores = {
    keenan: 80,
    damon: 67,
    kin: 89,
    shawn: 91,
    marlon: 71
}
// for (let person in testScores){
//     console.log(`${person} scored ${testScores[person]}`);
// }

let total = 0;
let scores = Object.values(testScores);
for (let score of scores){
total += score;
}
console.log(total/ scores.length)
