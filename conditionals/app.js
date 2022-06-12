// let random = Math.random();
// if(random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!!")
//     console.log(random);
// }
// if(random >=0.5){
//     console.log("YOUR NUMBER IS GREATER THAN 0.5!!!")
//     console.log(random);
// }

// const dayOfWeek = prompt('Enter a day').toLowerCase();
// if (dayOfWeek === 'monday'){
//     console.log("UGHH I HATE MONDAYS!")
// } else if (dayOfWeek === 'saturday'){
//     console.log("YAY I LOVE SATURDAYS")
//     }
// else if (dayOfWeek === 'friday'){
//     console.log("FRIDAY ARE DECENT ESPECIALLY AFTER WORK!")
// }
// else{
//     console.log("MEH")
// }
// const age = 2;
// if (age < 5){
//     console.log("You are a baby. You get in for free")
// } else if(age < 10){
//     console.log("You are a child. You pay $10")
// }

const password = prompt("Please enter a new password");
if(password.length >= 6){
    if (password.indexOf(' ') === -1){
        console.log("Valid Password!")
    }else {
        console.log("Password cannot contain spaces!")
    }
    
}else{
    console.log("PASSWORD TOO SHORT. MUST BE 6 PLUS XTERS")
}
