var guestList = ["Ali", "Asil", "Adnan", "Azam"];
var cannotMakeDinner = ["Ali"];
// for (let i = 0; i < guestList.length ; i++){
//     let guest = guestList[i];
//     console.log(`Respected ${guest} you are invited to our party dinner THANK YOU!!`)
// };
console.log("unfortunately ".concat(cannotMakeDinner, " cannot make dinner with us!"));
guestList.shift();
cannotMakeDinner.pop();
cannotMakeDinner.push("shahbaz");
var allguest = guestList.concat(cannotMakeDinner);
for (var i = 0; i < allguest.length; i++) {
    var element = allguest[i];
    console.log("now mr ".concat(element, " is invited to our dinner"));
}
