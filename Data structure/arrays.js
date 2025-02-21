const arr1 = [1, 2, 3, 4, 5, true, "hello world"] // elements can be of different data types

const arr = [1, 2, 3, 4, 5]
console.log(arr[1]) // element at index 1


// another way to define

const arr2 = new Array(1, 2, 3, 4)


// methods

arr.push(6)
console.log(arr)

arr.push(7)
arr.pop(7)

console.log(arr.includes(10))
console.log(arr.indexOf(9)) // output: -1
console.log(arr.indexOf(4))

const word = arr.join()
console.log(word)
console.log(typeof(word)) // string


// slice & splice

const newArr1 = [1, 2, 3, 4, 5]
const newArr2 = [1, 2, 3, 4, 5]

const modifiedArr1 = newArr1.slice(1,3) // remains unchanged
console.log("newArr1 ", newArr1)
console.log("modifiedArr1 ", modifiedArr1)

const modifiedArr2 = newArr2.splice(1,3) // part of array is being cut off
console.log("newArr2 ", newArr2)
console.log("modifiedArr2 ", modifiedArr2)



