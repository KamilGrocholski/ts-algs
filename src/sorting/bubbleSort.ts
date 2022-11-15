import { Comparator, Compare, defaultCompare, swap } from "../utils/common"

export const bubbleSort = <T>(
    array: T[], 
    comparator: Compare<T> = defaultCompare
): void => {
    for (let i = 0; i < array.length - 1; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (comparator(array[i], array[j]) === Comparator.BIGGER) {
                swap(array, i, j)
            } 

        }

    }
}