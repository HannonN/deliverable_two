let rain = prompt("How many inches of rain fell?");

function repeatstring(str, amount){
    return str.repeat(amount)
}
console.log(repeatstring("*", rain));

const startingbushelyeild = 50;
let bushelyeild =null;
let regularfertilizer =('regular');
let premiumfertilizer =('premium');
let finalyeild =null;
// Is using null here the correct way tosay we do not know the value yet?  

if (rain>=20){
    bushelyeild =(startingbushelyeild*0.9);
}
else if (rain < 10){
    bushelyeild =(startingbushelyeild*0.8);
}
else{
    bushelyeild===startingbushelyeild;
}

let fertilizer = prompt("Did you use fertilizer?", "Yes or No");
    if (fertilizer === "Yes"){
        let fertilizerbatch = prompt("Did you use regular or premium fertilizer?");
        if (fertilizerbatch === premiumfertilizer){
            finalyeild = bushelyeild * 1.15;
        }
        else {
            finalyeild = bushelyeild * 1.1;
        }
    }
    
  
    else {
        finalyeild = bushelyeild;
    }
console.log ("The yeild should be " +finalyeild+ " bushels per acre");