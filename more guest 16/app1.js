var guestList = ["Ali", "Asil", "Adnan", "Azam"];
var allguest = guestList;
console.log("HURRAY we have found a new table");
guestList.unshift("Basit");
guestList.splice(1, 2, "saif");
guestList.push("subhan");
guestList.length / 2, 0, "";
for (var i = 0; i < allguest.length; i++) {
    var element = allguest[i];
    console.log("now mr ".concat(element, " is invited to our dinner"));
}
console.log(guestList);
