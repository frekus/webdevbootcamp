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

function yell(msg){
    try {
        console.log(msg.toUppercase().repeat(3));
    } catch (e) {
        console.log("Please paass a string next time");
    }
}


