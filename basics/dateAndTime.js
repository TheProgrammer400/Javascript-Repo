let date1 = new Date() // instance of Date

console.log(date1)
console.log(date1.toString())
console.log(date1.toDateString())

console.log(date1.toLocaleString())

console.log(typeof date1) // object

// custom date

let date2 = new Date(2023, 1, 12) // year, month-1, day
console.log(date2.toString())

let date3 = new Date("2022-08-23") // yyyy-dd-mm
console.log(date3.toString())

let date4 = new Date("08-23-2022") // mm-dd-yyyy
console.log(date4.toString())

// timestamps

let timestamp1 = Date.now()
console.log(timestamp1) // miliseconds

console.log(date3.getTime()) // miliseonds passed from 1 Jan, 1970 to this date
// used to compare time
