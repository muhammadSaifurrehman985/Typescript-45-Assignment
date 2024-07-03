let visitingPlaces: string[] = [
  "Arab",
  "New york",
  "America",
  "Dubai",
  "Turkey",
];
console.log(" orignal list",visitingPlaces);

   let sortedlist = [...visitingPlaces].sort()

console.log( "sorted list",sortedlist)

console.log("orignal list",visitingPlaces);

let reverseorder = [...visitingPlaces].sort().reverse();

console.log("revered alphabetical array",reverseorder);

console.log("again in orugnal order",visitingPlaces);

visitingPlaces.reverse()

console.log ("now it is in revered order",visitingPlaces)

visitingPlaces.reverse()

console.log ("now it is again its orignal order", visitingPlaces)

visitingPlaces.sort()

console.log ("now it is in sorted order", visitingPlaces)

visitingPlaces.sort().reverse()

console.log ("now it is in orignal reversed order", visitingPlaces)