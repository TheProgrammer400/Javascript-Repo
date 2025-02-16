let age = 23
let anotherAge = "23"
// let anotherAge = "23khikhikhi" 

/* 
while converting above var, it will print NaN (not a number),
but the typeof will still print number

if anotherAge = null then, typeof will print object.
but after conversion, typeof will be number

if anotherAge = undefined, typeof will print undefined
but after conversion, typeof will be number

if anotherAge = any boolean value, then typeof will be boolean
and again, after conversion, it will be number.
by printing the converted var, it will be print 1 or 0 based on boolean value
*/

console.log(typeof(age))
console.log(typeof anotherAge)

let valueInAnotherAge = Number(anotherAge);
console.log(valueInAnotherAge)
console.log(typeof valueInAnotherAge)

// converting number into boolean i.e. 1 --> true and 0 --> false

let eligible = 1;
let booleanEligible = Boolean(eligible)

console.log(typeof eligible)
console.log(typeof booleanEligible)
console.log(booleanEligible)

let emptyName = ""
let booleanEmptyName = Boolean(emptyName)

console.log(typeof booleanEmptyName)
console.log(booleanEmptyName)

let username = "unknown"
let booleanName = Boolean(username)

console.log(typeof booleanName)
console.log(booleanName)

/*
conclusion:
    if the string is empty then the converted boolean will be false
    else, converted boolean will be true
*/

// converting to string

let num = 12
let stringNum = String(num)

console.log(stringNum)
console.log(typeof stringNum)

