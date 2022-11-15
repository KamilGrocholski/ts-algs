import { Comparator, Compare, defaultCompare, swap } from "../utils/common";

export const quickSort = <T>(
    array: T[],
    comparator: Compare<T> = defaultCompare
) => {
    recursiveQuickSort(array, 0, array.length - 1, comparator)
}

const recursiveQuickSort = <T>(
    array: T[],
    start: number,
    end: number,
    comparator: Compare<T>
) => {
    if (start < end) {
        const pivotIndex = partition(array, start, end, comparator)
        recursiveQuickSort(array, start, pivotIndex - 1, comparator)
        recursiveQuickSort(array, pivotIndex + 1, end, comparator)
    }
}

export const partition = <T>(
    array: T[],
    start: number, 
    end: number,
    comparator: Compare<T>
) => {
    let i = start - 1
    let j = start
    const pivot = array[end]
    
    while (j < end) {
        if (comparator(array[j], pivot) === Comparator.SMALLER) {
            i++
            swap(array, j, i)
        }
        j++
    }

    i++
    swap(array, i, end) 

    return i
}