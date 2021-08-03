const weather = prompt("What's the weather like?");

switch (weather) {
    case "sunny":
        console.log("T-shirt time!");
        break;
    case "windy":
        console.log("Windbreaker life.");
        break;
    case "rainy":
        console.log("Bring that umbrella!");
        break;
    case "snowy":
        console.log("Winter is coming! Just stay inside!");
        break;
    default:
        console.log("Not a valid weather type");
}


const weather = Number(prompt("What's the weather like? Choose an option:"+
"\n1.\tSunny\n2.\tWindy\n3.\tRainy\n4.\tSnowy"));


switch (weather){

    case 1: console.log("T-shirt time!");  break; /* case x: code break keyword */
    case 2: console.log("Windbreaker life.");  break; /* case x: code break keyword */
    case 3: console.log("Bring that umbrella!");  break; /* case x: code break keyword */
    case 4: console.log("Winter is coming! Just stay inside!");  break; /* case x: code break keyword */
    default: console.log("Not a valid weather type"); // default : code



}



switch (expression) {
    case value1:
      // Code to run when the expression matches value1
      break;
    case value2:
      // Code to run when the expression matches value2
      break;
    // ...
    default:
    // Code to run when neither case matches
  }
