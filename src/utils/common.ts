export type Order = 'ASC' | 'DESC'

export type Compare<T> = (a: T, b: T) => ComparatorValue

export type ComparatorKey = keyof typeof Comparator
export type ComparatorValue = typeof Comparator[ComparatorKey]
export const Comparator = {
    SMALLER: -1,
    BIGGER: 1,
    EQUAL: 0
} as const

export const defaultCompare: Compare<any> = (a, b) => {
    if (a === b) return Comparator.EQUAL
    return a > b ? Comparator.BIGGER : Comparator.SMALLER
} 

export const swap = (array: any[], a: number, b: number): void => {
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
}

export const getMidIndex = (array: any[]): number => Math.floor(array.length / 2) 
