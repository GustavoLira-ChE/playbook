/* 

JavaScript conditionals, loops arrays methods

*/

// Ejemplo 1: for Each para imprimir elementos de una lista
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(element => {
    console.log(element)
});

// Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista
let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(element => {
    sum += element
});
console.log(sum)

// Ejemplo 3: forEach para imprimir los países en letras mayúsculas
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach(country => {
    console.log(country.toUpperCase())
})

// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
const numbers4 = [1, 2, 3, 4, 5]
const numbers4Square = numbers4.map(num => {
    return num * num
})
console.log(numbers4Square)

// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToLowerCase = names.map(name => {
    return name.toLowerCase()
})
console.log(namesToLowerCase)

// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countries6ToUpperCase = countries6.map(country => {
    return country.toUpperCase().slice(0,3)
})
console.log(countries6ToUpperCase)

// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesWithLand = countries7.filter(country => {
    return country.includes('land')
})
console.log(countriesWithLand)

// Ejemplo 8: Filtrar una lista por condicional
const scores = [
    { name: 'A', score: 95 },
    { name: 'L', score: 98 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
]

const scoreGreaterEighty = scores.filter(score => score.score > 80)
console.log(scoreGreaterEighty)
const scoreGreaterEightyJustName = scores.filter(score => score.score > 80 && score.name.match(/[A-L]/))
console.log(scoreGreaterEightyJustName)

// Ejemplo 9: Uso del reduce
const numbers9 = [1, 2, 3, 4, 5]
const reducer = (sum, num) => sum + num;
let arraySum = numbers9.reduce(reducer,0);
console.log(arraySum)

// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 10, 'Explorer 4']
// Comprobar que todos los elementos de una lista son string
let AllAreString = names10.every(element => typeof element === 'string' )
console.log(AllAreString)

// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 19, 25, 32, 35, 18]
const firstAgeLessThan20 = ages.find(element => element < 20)
console.log(firstAgeLessThan20)

// Ejemplo 12: Uso de find en una lista de objetos
const scores12 = [
    { name: 'A', score: 95 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
]

let firstScoreLessThan80 = scores12.find(user => user.score < 80)
console.log(firstScoreLessThan80)

/* Ejemplo 13: Uso de findIndex, este método regresa la 
posición del primer elemento que cumpla con la validación 
que indiques. */
const names13 = ['Chikorita', 'Charizard', 'Onix', 'Pikachu', 'Ditto']
/* Regresar el index de la lista con el primer elemento cuyo 
número de caracteres sea menor a 7 */
const indexResult = names13.findIndex(pokemon => pokemon.length < 7)
console.log(indexResult)

/* Ejemplo 14: Uso de some, este método validará todos los 
elementos de la lista, y si alguno cumple con la validación 
indicada, regresará true, de lo contrario será false. */

// lista de elementos
const users = [
    {name: 'Alan', status: 'online'},
    {name: 'Caro', status: 'offline'},
    {name: 'Luis', status: 'offline'},
    {name: 'Raul', status: 'offline'},
    {name: 'Erik', status: 'offline'},
    {name: 'Jess', status: 'offline'}
]

//Revisar si almenos un usuario está activo 
let someValidation = users.some(user => user.status === 'online')
console.log(someValidation)

//Ejemplo 15: Uso de sort para ordenar elementos
/* Tambien se puede utilizar una función para ayudar 
a ordenar los elementos, en este caso como no hay función 
se ordena mediante el código UFT-16 por sus valores*/
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort())

// Ejemplo 16: Ordenando una lista de números
const randomNumbersArray = []
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
for(let i = 0; i < 20; i++){
    randomNumbersArray.push(getRandomIntInclusive(0,100))
}
console.log('El resultado de generar un array con números aleatorios es el siguiente:')
console.log(randomNumbersArray)
//Ahora se crea una función que ayude al método sort a ordenar los elementos de mayor a menor
function compareFunction(a,b){
    if(a > b){
        return -1
    }
    if(a < b){
        return 1
    }
    return 0
}
console.log(randomNumbersArray.sort(compareFunction))