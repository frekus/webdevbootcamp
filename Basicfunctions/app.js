// function singSong(){
//     console.log('Doh');
//     console.log('Reh');
//     console.log('Mi');
// }

// singSong()

// function greet(firstName, lastName){
//     console.log(`Hey there, ${firstName} ${lastName,[0]}.`)
// }

// function repeat(str, numTimes){
//     let result = '';
//     for (let i = 0; i < numTimes; i++){
//         result += str;
//     }
//     console.log(result);

// singSong()
// singSong()
// }

// function rant(message){
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
// }

// rant('woop')

// function isSnakeEyes(num1, num2){
//     if(num1 === 1 && num2 === 1){
//         console.log('Snake Eyes!');
//     }else {
//         console.log('Not Snake Eyes');
//     }
// }
// isSnakeEyes(1,1)
// //isSnakeEyes(4,2)

// function add(x, y) {
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         return false;
//     }

//     let sum = x + y;
//     return sum;
//     console.log("END OF FUNCTION") //never runs because of the return keyword
// }


/* let singleArr = [];

function lastElement(singleArr){
    let num = singleArr.length;
    let numm = num - 1;    
        if (numm !== -1){
            console.log(`The last element is ${singleArr[numm]}`);
        }  
}
lastElement([2,3]); */


/* let capitalize = null;
let word = prompt('Please enter a word');

capitalize =function(word){
    let str = word.charAt(0).toUpperCase() + word.slice(1);
    
    //return str;
    console.log(str);
//console.log(str)
}

capitalize(word); */


/* let word = prompt('Please enter a word');
function capitalize(word){
    let result =  word.charAt(0).toUpperCase() + word.slice(1);    
    //console.log(result);
    //return result;
}

console.log(capitalize(word)); */

/* const arr = [];
let total = 0;
function sumArray(arr){
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
    //console.log(total)
}
console.log(sumArray([100,10, -3])); */


/*  function returnDay(day){
    let dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if(day < 1 || day > 7){
        return null;
    }else{
        return dayOfWeek[day - 1];
    }
}

console.log(returnDay(7)) */
/* const square = {
    area(side){
        return side * side;
    },
    perimeter(side){
        return side * 4;
    }
} */

/* const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg(){
        this.eggCount += 1;
        return "EGG";
    }
    
    
} */

/* function yell(msg){
    try {
        console.log(msg.toUppercase().repeat(3));
    } catch (e) {
        console.log("Please paass a string next time");
    }
} */

//const numbers =  [1,2,3,4,5,6,7,8,9]

/* function print(element){
    console.log(element);
}

numbers.forEach(print) */

/* numbers.forEach(function (el){
    if (el % 2 === 0)
    console.log(el)
}) */

/* for (let el of numbers){
    console.log(el);
} */

/* const doubles = numbers.map(function(num){
    return num * 2;
})
 */
 /* const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1990
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1999
    },
    {
        title: 'Parasite',
        score: 95,
        year: 1995
    },
    {
        title: 'Alien',
        score: 93,
        year: 1790
    },
    {
        title: 'Alien',
        score: 63,
        year: 2010
    }
] */
/*
const titles = movies.map(function (movie){
    return movie.title.toUpperCase();
}) */

// DO NOT ALTER THE FOLLOWING CODE:
/* const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
const firstNames = fullNames.map(function (name){
    return name.first;
}) */

/* const add = function(x, y) {
    return x + y;
} */

/* const add = (x, y) => {
    return x + y;
} */

/* const square = num => {
    return num * num;
} */

/* const rollDie = () => {
    return Math.floor(Math.random() * 6) + 3
} */

/* const greet = name => {
    return `Hey ${name}!`;
} */

/* const rollDie = () => (
     Math.floor(Math.random() * 6) + 1
) */

// const add = (x, y) => x + y

/* const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10}`
}) */

/* const newMovies = movies.map(movie =>
    `${movie.title} - ${movie.score / 10}`
) */

 
/* console.log("Hello")
setTimeout( () => {
    console.log("Goodbye")

}, 3000) 

setTimeout( () => {
    console.log("Are you still there?")

}, 30000) */

// TO USE CLEARINTERVAL ASSIGN
/* const id = setInterval(() => {
    console.log(Math.random())
}, 2000); */

// clearInterval(id)

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.filter(n => {
    return n < 7
})
 */

/* const goodMovies = movies.filter(m => m.score > 80)
const goodTitles = goodMovies.map(m => m.title)

movies
        .filter(m => m.score > 80)
        .map(m => m.title)

const badMovies = movies.filter(m => m.score < 70)

const recentMovies = movies.filter(m => m.year > 2000) */

const usernames = []
function validUserNames(usernames) {
    // your code here
    usernames.filter(u => {
        return u.
    })

  }