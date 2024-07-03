let guestList : string [] = ["Ali","Asil","Adnan","Azam"];
let cannotMakeDinner :string[] =["Ali"]
// for (let i = 0; i < guestList.length ; i++){
//     let guest = guestList[i];
//     console.log(`Respected ${guest} you are invited to our party dinner THANK YOU!!`)
// };
console.log(`unfortunately ${cannotMakeDinner} cannot make dinner with us!`)

guestList.shift()

cannotMakeDinner.pop()
cannotMakeDinner.push("shahbaz")

let allguest = guestList.concat(cannotMakeDinner)

for (let i = 0; i < allguest.length; i++) {
    const element = allguest[i];
    console.log(`now mr ${element} is invited to our dinner`)
    
}