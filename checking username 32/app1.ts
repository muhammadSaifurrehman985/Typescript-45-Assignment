let current_users = ["Asil", "Babar", "Soban", "Saeed", "Farhan"];
let new_users = ["Azeem", "Azam", "Aqeel", "Asil", "Babar"];

for(let new_user of new_users) {
    let lowerCaseUser = new_user.toLowerCase()
    let userExistInArray = current_users.some(current_users => current_users.toLowerCase() === lowerCaseUser)

    if (userExistInArray){
        console.log (`${new_user} user exist kindly enter a new name`)
    }else {
        console.log(`The ${new_user} user dont exists`)
    }
}

