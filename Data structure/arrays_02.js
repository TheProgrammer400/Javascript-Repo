const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = [7, 8, 9, 10]

arr1.push(arr2) // makes array inside of an array instead of merging them
console.log(arr1)

console.log(arr1[6]) // whole arr2
console.log(arr1[6][2]) // element inside arr2

// concatenate arrays

const arr3 = arr1.concat(arr2)
console.log(arr3)

// spreading

const newArr1 = [1, 2, 3, 4, 5, 6]
const newArr2 = [7, 8, 9, 10]

const allNums = [...newArr1, ...newArr2] // more preferable
console.log(allNums)

const newArr3 = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
const flatArr = newArr3.flat(Infinity) // pass the no. of depth you want to reach
console.log(flatArr)


// some methods

console.log(Array.isArray("hello world"))
console.log(Array.from("hello world"))

console.log(Array.from({name: "unknown"})) // interesting


let n1 = 100
let n2 = 200
let n3 = 300

console.log(Array.of(n1, n2, n3))