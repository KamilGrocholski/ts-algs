import { Comparator, Compare, defaultCompare } from "../utils/common";

export const mergeSort = <T>(
    array: T[],
    comparator: Compare<T> = defaultCompare
) => {
    if (array.length > 1) {
        const mid = Math.floor(array.length / 2)
        const left = mergeSort(array.slice(0, mid), comparator)
        const right = mergeSort(array.slice(mid) ,comparator)
        array = merge(left, right, comparator)
    }
    
    return array
}

const merge = <T>(
    left: T[], 
    right: T[], 
    comparator: Compare<T>
) => {

    let l = 0
    let r = 0
    let k = 0

    const result = new Array(left.length + right.length)

    while (l < left.length && r < right.length) {
        result[k++] = comparator(left[l], right[r]) === Comparator.SMALLER ? left[l++] : right[r++] 
    }

    for (; l < left.length; l++) {
        result[k++] = left[l]
    }

    for (; r < right.length; r++) {
        result[k++] = right[r]
    }

    return result
}