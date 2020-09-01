let array = [1,2,3, [1,2,3, [1,2,3]]]

console.table(array.flat(2)) //!flat es el valor de la profundidad



let array2 = [1,2,3,4,5]

console.table(array2.flatMap(value => [value, value*2]))



let hello = '                      hello world'

console.log(hello)
console.log(hello.trimStart())

let hello = 'hello world           '
console.log(hello)
console.log(hello.trimEnd())


//!es10 permite que catch no tenga argumentos y aún así poder manejar el error
try {
    
} catch {
    error
}

let entries = [['name','miguel'],['age',21]]
console.table(Object.fromEntries(entries))


let mySymbol = `My symbol`
let symbol = Symbol(mySymbol)
console.log(symbol.description)