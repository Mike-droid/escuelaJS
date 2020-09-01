const obj = {
    name: 'Miguel',
    age: 21,
    country: 'MX',
}

//!De esta forma el atributo name saldrá, los demás datos quedarán encapsulados
let {name, ...all} = obj
console.log(name,all)


const obj = {
    name: 'Miguel',
    age: 21,
    country: 'MX',
}

//!De esta forma no imprimirá country
let {country, ...all} = obj
console.log(all)

/************************************************* */
const obj2 = {
    name: 'Miguel',
    age: 21
}

const obj3 = {
    ...obj2, //!Con esto la información del primer objeto está ya aquí
    country: 'MX'
}

console.log(obj3)


/********************************************************************************** */

const helloWorld = () => {
    return new Promise((resolve,reject) =>{
        (true)
        ? setTimeout(() => {resolve('hello world')}, 3000)
        : reject(new Error('test error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizó'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ //!año, mes y día, NO PUEDE CONTENER ESPACIOS
const match = regexData.exec('2020-09-01')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year,month,day)