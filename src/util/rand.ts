export const pick = (...elems: number[]): number => {
    let index = Math.floor(Math.random() * (elems.length))
    return elems[index]
}