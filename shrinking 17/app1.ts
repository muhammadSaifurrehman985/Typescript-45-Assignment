let guestList: string[] = ["Ali", "Asil", "Adnan", "Azam"];

console.log(`SORRY I CAN ONLY INVITE 2 PEOPLE`);

let person1 = guestList.pop();
console.log(` sorry ${person1} i cannot invite you to my dinner`);
let person2 = guestList.pop();
console.log(` sorry ${person2} i cannot invite you to my dinner`);

for (let i = 0; i < guestList.length; i++) {
    let remainingGuest = guestList[i];
    console.log (`${remainingGuest} you are still invited to our dinner `)
}

guestList.splice(0,2)

console.log(guestList);