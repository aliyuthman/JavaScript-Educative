const weather = Number(prompt("What's the weather like? Choose an option:"+
"\n1.\tSunny\n2.\tWindy\n3.\tRainy\n4.\tSnowy"));

if(weather === 1){
    console.log("T-shirt time!");
} else if(weather === 2){
    console.log("Windbreaker life.");
} else if (weather === 3){
    console.log("Bring that umbrella!");
} else if (weather === 4){
    console.log("Winter is coming! Just stay inside!");
} else{
    console.log("Not a valid weather type");
}