let ordinalNumber : number[]=[1,2,3,4,5,6,7,8,9]

for (let ordinalNumbers of ordinalNumber) {
    let suffix :string = "th"
    if (ordinalNumbers == 1){
        suffix = "st"
    }else if (ordinalNumbers == 2){
        suffix = "nd"
    }else if (ordinalNumbers == 3){
        suffix = "rd"
    }
    console.log (`${ordinalNumbers}${suffix}`)
}