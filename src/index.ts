import { fisherYates } from "./shuffle/fisherYates"
import { riffleShuffle } from "./shuffle/riffleShuffle"
import { bubbleSort } from "./sorting/bubbleSort"
import { insertionSort } from "./sorting/inertionSort"
import { mergeSort } from "./sorting/mergeSort"
import { quickSort } from "./sorting/quickSort"
import { selectionSort } from "./sorting/selectionSort"

const arr = [8,2,4,7,1,3,9,6,5]

// fisherYates(arr)

// console.log(arr)

// bubbleSort(arr, 'DESC')
// selectionSort(arr, 'DESC')
// insertionSort(arr, 'DESC')

console.log(JSON.stringify(arr))
quickSort(arr)
console.log(JSON.stringify(arr))

// console.log(mergeSort(arr))
