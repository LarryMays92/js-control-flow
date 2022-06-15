const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];
// creates a function

let test = arr1.length === arr2.length
let test2 = null
for (let i = 0; i < arr1.length; i++) {
    if ( arr1[i] !== arr2[i]) {
        test2 = false
        break
    } else { 
        test2=true 
        }
}
console.log(" Do Array One and Array TwoHave Th Same Number Of Entries", test)
console.log(" Do Array One And Array Two Have the Same Entries",test2)


