import { Comparator, Compare, defaultCompare, Order, swap } from "../utils/common"

export const selectionSort = <T>(
    array: T[],
    order: Order = 'ASC',
    comparator: Compare<T> = defaultCompare
): void => {
    if (order === 'ASC') {
        for (let i = 0; i < array.length; i++) {

            let minIndex = i
    
            for (let j = i + 1; j < array.length; j++) {
    
                if (comparator(array[j], array[minIndex]) === Comparator.SMALLER) {
                    minIndex = j
                }
    
            }    
    
            swap(array, i, minIndex)
        }
    }

    else if (order === 'DESC') {
        for (let i = 0; i < array.length; i++) {

            let maxIndex = i
    
            for (let j = i + 1; j < array.length; j++) {
    
                if (comparator(array[j], array[maxIndex]) === Comparator.BIGGER) {
                    maxIndex = j
                }
    
            }    
    
            swap(array, i, maxIndex)
        }
    }
}