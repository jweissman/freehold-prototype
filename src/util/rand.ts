export const pick = <T>(...elems: T[]): T => {
    let index = Math.floor(Math.random() * (elems.length))
    return elems[index]
}