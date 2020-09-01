//!Parametros por defecto, es6 
function newFunction(name='Miguel', age=21, country='MX') {
    console.log(name,age,country)
}

newFunction() //!Si no pongo los parametros, va a tomar los que vienen por defecto
newFunction('Oscar',30,'USA')

//!Template literals
let hello = 'Hello'
let world = 'world'
let epicPhrase = `${hello} ${world}`
console.log(epicPhrase)

let lorem = `lorem impsun dolor sit amet y 
continua la frase aquí abajo`

console.log(lorem)

//! Esto de aquí abajo funciona igual para ambas maneras
let person = {
    'name': 'Miguel',
    'age': 32,
    'country': 'México'
}
console.log(person.name, person.age, person.country)


let {name, age, country} = person
console.log(name, age, country)
//! Esto de aquí abajo funciona igual para ambas maneras

let team1 = ['Oscar','Julian','Ricardo']
let team2 = ['Valeria','Jessica','Camila']

let education = ['David', ...team1, ...team2] //* <---- Nuevo elemento

console.table(education)


//! let y var

{
    var variable1 = 'var'
}
console.log(variable1) //* Este sí va a funcionar

{
    let variable2 = 'let'
    console.log(variable2) //* Este funcionará sólo en esta parte del código por el alcance del scope
}

const a = 'b' //* constante, NO se puede reasignar
console.log(a)


//******************************* */
//!es6
let nombre = 'Miguel'
let edad = 21
obj = {nombre,edad} //!Aquí automáticamente toma los valores previamente asignados
console.log(obj)
//******************************* */


//!Ejemplo de arrow function
const names = [
    {name:'Miguel', age:21},
    {name: 'Daniel', age:20}
]
//!Aquí lo tenemos
let listOfNames = names.map(item => console.log(item.name))
//!Va a iterar sobre todos los elementos



//!Otro ejemplo de arrow function
const square = num => num * num


//!Promesas, ya que js es asincrónico

const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve('Hey! Todo bien :D')
        } else {
            reject('Ups! Algo salió mal :( ')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    //!.then( () => console.log('Hola')) podemos tener más de 1 then
    .catch(error => console.log(error))

/******************************************* */
class calculator{
    constructor(){
        this.valueA = 0
        this.valueB = 0
    }

    suma(valorA, valorB){
        this.valueA = valorA
        this.valueB = valorB
        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.suma(5,3))



/************************************* */

//!Trayendo un módulo de otro archivo
const hello = require('./module')
console.log(hello())




//!Generador

function* generadorSaludo() {
    if (true) {
        yield 'Hola '
    }
    if (true) {
        yield 'mundo'
    }
}

const generadorDeSaludos = generadorSaludo()
console.log(generadorDeSaludos.next().value)
console.log(generadorDeSaludos.next().value)
console.log(generadorDeSaludos.next().value) //!El tercero regresará undefined