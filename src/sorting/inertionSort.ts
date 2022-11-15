import { defaultCompare, Compare, Comparator, swap } from "../utils/common";

export const insertionSort = <T>(
    array: T[],
    comparator: Compare<T> = defaultCompare
) => {
    for (let i = 1; i < array.length; i++) {

        let j = i
    
        while (j > 0 && comparator(array[j - 1], array[j]) === Comparator.BIGGER) {
    
            swap(array, j - 1, j)
            j--
    
        }
    
    }
}