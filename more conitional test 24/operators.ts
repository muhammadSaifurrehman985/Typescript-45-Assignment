let number1 : number = 10
let number2 : number = 20
let number3 : number = 30

console.log ("is number1 == 10 And number2 == 20 ? i will say it true")
console.log (number1 == 10 && number2 == 20)

console.log ("is number1 == 10 And number2 == 30 ? i will say it false")
console.log (number1 == 10 && number2 == 30)

console.log ("is number1 == 10 And number2 == 40 ? i will say it false")
console.log (number3 == 10 || number2 == 40)// it will print false because both statement are false

console.log ("is number1 == 10 And number2 == 30 ? i will say it true")
console.log (number3 == 20 || number2 == 20)//it will print true because one statement is true

