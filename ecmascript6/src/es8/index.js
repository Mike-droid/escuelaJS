const data = {
    frontend: 'Miguel',
    backend: 'Roberto',
    design: 'Perla',
}

const entries = Object.entries(data)
console.table(entries)
console.log(entries.length)

/************************************************************************************* */

const data = {
    frontend: 'Miguel',
    backend: 'Roberto',
    design: 'Perla',
}

const values = Object.values(data)
console.table(values)
console.log(values.length)

/**************************************************************** */
const string = 'hello'
console.log(string.padStart(9,'hi')) //!El número representa el máximo de longitud
console.log(string.padEnd(12,' -----'))
console.log('food'.padEnd(12,' -----'))

/****************************************++++++++++++++++++++++ */


//!Async await
const helloWorld = () => {
    return new Promise((resolve,reject) =>{
        (true) //!if ternario
        ? setTimeout(() => resolve('Hello world'),3000) //!condición del if se cumple
        : reject(new Error('test error')) //!else
    })
}

const helloAsync = async () => { //!Función asíncrona
    const hello = await helloWorld()
    console.log(`${hello} desde hello async`)
}

helloAsync() //!llamanda a la función


//!Esta es mejor por el manejo de errores
const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(`${hello} desde another function`)
    } catch (error) {
        console.log(error)
    }
}

anotherFunction()