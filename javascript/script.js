//Challange 1 
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;
// let markBMI = markWeight/(markHeight * markHeight);
// let johnBMI = johnWeight/(johnHeight * johnHeight);
// console.log(markBMI);
// console.log(johnBMI);
// const markHeigherBMI = markBMI > johnBMI;
// console.log(markHeigherBMI);
//--------------------------------------------------------------------------------------------
// const firstName = 'Jonas'
// const job = 'teacher'
// const birthYear = 1989
// const year = 2021
// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + '  year old ' + job
// console.log(jonas)
// // ES6(ES2015) add string literals to the java script
// //Use ``(back ticks) to write template literals
// const jonasLiteral = `I'm ${firstName}, a ${(year - birthYear)} years old ${job}`
// console.log(jonasLiteral)
// // use `` to write multiline strings
// console.log(`String values
// which multiline
// code`)
//-------------------------------------------------------------------------------------------
// Challange 2
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;
// const markBMI = markWeight/markHeight ** 2;
// const johnBMI = johnWeight/johnHeight ** 2;
// console.log(markBMI, johnBMI)
// if(markBMI > johnBMI){
//     console.log(`"Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
// } else {
//     console.log(`"John's BMI (${johnBMI}) is higher than Marks's (${markBMI})`)
// }
//-----------------------------------------------------------------------------------------------

// //type converison
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear) + 18)
// console.log(Number('Kishore'))
// console.log(typeof NaN)

// //type coersion
// console.log('I am ' + 23 + ' years old')
// console.log('22' - '10' - 2)
// console.log('23' * '4')
// console.log('10' / '2')

// in javascript there are 5 falsy values
// 0, '', undefined, null, NaN
// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))
// console.log(Boolean('Kishore'))
// console.log(Boolean({}))

// '===' is strict comparison operator becasue it will not type coerse 
// '==' is loose comparison operator because it will type coerse
// eg., '23' == 23 true
// eg., '23' === 23 false
// !== is strict and != loose comparison operators
// const favourite = Number(prompt("What's your favorite number?"))

// console.log(favourite)
// console.log(typeof favourite)  // when we receive value from prompt it will be string so we convert to number

// if(favourite === 23)
//     console.log('Cool! 23 is an amazing number')
// else if (favourite === 7)
//     console.log('7 is also amazing number')
// else 
//     console.log('number is neither 23 nor 7')

// if(favourite !== 23)
//     console.log("Why not 23?")

// if (favourite != '23')
//     console.log("loose comparison")

//coding challange 4

const bill = 275 ;
const tip = bill * ((bill >= 50 && bill <= 300 ? 15 : 20) / 100)


console.log(`Bill ${bill + tip}, and tip is ${tip}, total bill is ${bill + tip}`)




