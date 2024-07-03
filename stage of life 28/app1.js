let age = 66;
if (age < 2) {
    console.log(`this person is a baby`);
}
else if (age >= 2 && age < 4) {
    console.log("this person is a todler");
}
else if (age >= 4 && age < 13) {
    console.log("this person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("that the person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("this person is an adult");
}
else if (age >= 65) {
    console.log("this person is an elder");
}
export {};
