/*Problem Statement #
Write a program that accepts a day name from the user in the variable, then shows the name of the following day. Incorrect inputs must be taken into account.*/

//using if statement
const day1 = "Monday"
const day2 = "Tuesday"
const day3 = "Wednesday"
const day4 = "Thursday"
const day5 = "Friday"
const day6 = "Saturay"
const day7 = "Sunday"

const day = Number(prompt(`What's today? Choose an option: \n1.\t\t${day1}\n2.\t\t${day2}\n3.\t\t${day3}\n4.\t\t${day4}\n5.\t\t${day5}\n6.\t\t${day6}\n7.\t\t${day7}`));

if (day === 1){
    console.log(`Today is ${day1}, thus tomorrow is  ${day2}`);

} else if(day === 2){
    console.log(`Today is ${day2}, thus tomorrow is  ${day3}`);
}  else if(day === 3){
    console.log(`Today is ${day3}, thus tomorrow is  ${day4}`);
}  else if(day === 4){
    console.log(`Today is ${day4}, thus tomorrow is  ${day5}`);
}  else if(day === 5){
    console.log(`Today is ${day5}, thus tomorrow is  ${day6}`);
}  else if(day === 6){
    console.log(`Today is ${day6}, thus tomorrow is  ${day7}`);
}  else if(day === 7){
    console.log(`Today is ${day7}, thus tomorrow is  ${day1}`);
} else{

    console.log("Invalid day ")
}



const day = prompt("Enter a day of the week:");

// Solution using an if
if (day === "monday" || day === "Monday") {
  console.log("Tomorrow is Tuesday");
} else if (day === "tuesday" || day === "Tuesday") {
  console.log("Tomorrow is Wednesday");
} else if (day === "wednesday" || day === "Wednesday") {
  console.log("Tomorrow is Thursday");
} else if (day === "thursday" || day === "Thursday") {
  console.log("Tomorrow is Friday");
} else if (day === "friday" || day === "Friday") {
  console.log("Tomorrow is Saturday");
} else if (day === "saturday" || day === "Saturday") {
  console.log("Tomorrow is Sunday");
} else if (day === "sunday" || day === "Sunday") {
  console.log("Tomorrow is Monday");
} else {
  console.log("Unrecognized day!");
}

// Alternative solution using a switch
/* switch (day) {
  case "monday":
    console.log("Tomorrow is tuesday");
    break;
  case "tuesday":
    console.log("Tomorrow is wednesday");
    break;
  case "wednesday":
    console.log("Tomorrow is thursday");
    break;
  case "thursday":
    console.log("Tomorrow is friday");
    break;
  case "friday":
    console.log("Tomorrow is saturday");
    break;
  case "saturday":
    console.log("Tomorrow is sunday");
    break;
  case "sunday":
    console.log("Tomorrow is monday");
    break;
  default:
    console.log("Unrecognized day!");
} */
