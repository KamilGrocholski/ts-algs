import { getMidIndex } from "../utils/common"

export const riffleShuffle = <T>(array: T[]): void => {
    let mid = getMidIndex(array)
    let end = array.length - 1

    while (mid > 0) {
        const temp = array[mid]
        array[mid--] = array[end]
        array[end--] = temp
    }
}