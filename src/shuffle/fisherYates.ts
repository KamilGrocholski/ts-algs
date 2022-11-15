import { swap } from "../utils/common"

export const fisherYates = <T>(array: T[]): void => {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1))
        swap(array, i, randomIndex)
    }
}