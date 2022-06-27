// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// for(let lyrics = 1; lyrics<=6; lyrics++){
//     if(lyrics<=6){
//         console.log("Da ba dee da ba daa");
//     }
// }

// for(let num = 1; num <= 10; num += 1){
//     console.log(num);
// }

// for(let i = 0; i<=20; i += 2){
//     console.log(i)
// }

// for(let i = 1; i<=20; i += 2){
//     console.log(i)
// }

// for(let i = 100; i>=0; i -= 10){
//     console.log(i)
// }

const animals = [
    "Aardvark",
    "Aardwolf",
    "African Elephant",
    "African Tree Pangolin",
    "Aligator",
    "Alpaca",
    "Anteater",
    "Antelope",
    "Ape(s)",
    "Arabian Horse",
    "Armadillo",
    "Anthropod(s)",
    "Asian Elephant"
]

// for(let i = 0; i < animals.length; i++){
//     console.log(i, animals[i])
// }

// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(animals[i])
// }

/* for (let i = 1; i <= 10; i++){
    console.log(`i is: ${i}`)
    for(let j = 1; j < 4; j++){
        console.log(`       j is: ${j}`)
    }
} */

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio','Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++){
        console.log(row[j]);
    }
}