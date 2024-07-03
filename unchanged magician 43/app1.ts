


let magicians: string[] = ["Albert", "Cedula", "Jado"];

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(`the Great ${magicians[i]}`);
    }
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let greatMagicians = make_great([...magicians]);

console.log("Original magicians:");
show_magicians(magicians);

console.log("\nGreat magicians:");
show_magicians(greatMagicians);