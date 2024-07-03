// let magicians :string[]= ["Cedula","Jado","Dado"];
// function make_great(magicians:string[]) {
//   let theGreatMagicians :string [] =[]
//   for (let i = 0; i < magicians.length; i++) {
//     const element = magicians[i];
//     theGreatMagicians.push(element)
//   }
//   console.log (theGreatMagicians)
// }
// function show_magicians(magicians :string []):void{
//   for (let i = 0; i < magicians.length; i++) {
//     console.log(`${magicians[i]}`);
//   }
// }
// let greatMagician=make_great([...magicians])
// console.log(`orignal list of magicians`)
// show_magicians(magicians)
// console.log(`great magicians list`)
//  make_great(magicians)
let magicians = ["Albert", "Cedula", "Jado"];
function make_great(magicians) {
    let greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(`the Great ${magicians[i]}`);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Call make_great with a copy of the array
let greatMagicians = make_great([...magicians]);
// Show the original magicians
console.log("Original magicians:");
show_magicians(magicians);
// Show the great magicians
console.log("\nGreat magicians:");
show_magicians(greatMagicians);
export {};
