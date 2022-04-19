/* 

Objetos en JavaScript

*/

//Example1: create a empty object
let myObject = {}
console.log(myObject)

//Example2: create a object with properties
let myObject2_user = {
    name: "John",
    last_name: "Doe"
}
console.log(myObject2_user)

//Example3: create a object with different properties
let myObject_pokemon = {
    kanto: [
        {name: 'bulbasaur', type: 'grass'},
        {name: 'ivysaur', type: 'grass'},
        {name: 'venusaur', type: 'grass'}
    ],
    johto: [
        {name: 'chikorita', type: 'grass'},
        {name: 'bayleef', type: 'grass'},
        {name: 'meganium', type: 'grass'}
    ],
    hoenn: [
        {name: 'treecko', type: 'grass'},
        {name: 'grovyle', type: 'grass'},
        {name: 'sceptile', type: 'grass'}
    ]
}
console.log(myObject_pokemon)
console.log(myObject_pokemon.hoenn)
console.log(myObject_pokemon['johto'])
console.log(myObject_pokemon['hoenn'][0])
console.log(myObject_pokemon['hoenn'][0].name)

//Example4: create a object with methods
const child = {
    name: 'Jack',
    //The next function is saved as a object property
    sayHello: function(){
        console.log(`${this.name} says hello`)
    }
}
child.sayHello()

//Example: create a object with methods that receive parameters
const child2 = {
    name: 'Trevor',
    sayHello: function(who){
        console.log(`${this.name} say hello to ${who}`)
    }
}
child2.sayHello('John')