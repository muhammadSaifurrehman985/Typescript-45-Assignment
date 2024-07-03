let username :string[] = ["saif","admin","ali","subhan","ramazan",]

for (let i = 0; i < username.length; i++) {
    const element = username[i];
    
    if (element === "admin") {
        console.log (`Hello admin, would you like to see a status report?`)
    } else {
console.log (`Hello ${element}, thank you for logging in again.`)
    }
}