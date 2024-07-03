let guestList: string[] = ["Ali", "Asil", "Adnan", "Azam"];

console.log(`HURRAY we have found a new table`);

guestList.unshift("Basit");
guestList.splice(1,2 ,"saif")
guestList.push("subhan")

for (let i = 0; i < guestList.length; i++) {
  const element = guestList[i];
  console.log(`now mr ${element} is invited to our dinner`);
}