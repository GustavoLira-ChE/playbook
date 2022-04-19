//Ejemplo 1: crear una clase vacía
class Person{
}
console.log(Person)
function Person1(){
}
//console.log(typeof Person, typeof Person1)

//Ejemplo2
//Crear un objeto a partir de una clase
let person1 = new Person() //Instanciar
console.log(`Instancia de una clase creada ${person1}`)

//Ejemplo3
//Crear objeto con atributos
class Pokemon {
    constructor(name, type, attack){
        this.name = name
        this.type = type
        this.attack = attack
    }
}
//Instanciar objeto con atributos
let pikachu = new Pokemon('pikachu', 'electric', 'thunder')
let charizard = new Pokemon('charizard', ['fire', 'flight'], 'Fireblast')
console.log(charizard)
console.log(pikachu, typeof Pokemon, typeof pikachu)

// Ejemplo 4: Métodos en los objetos
class Repository{
    constructor(name, author, language, stars){
        this.name = name
        this.author = author
        this.language = language
        this.stars = stars 
    }
    getNumberStars(){
        return `Repository ${this.name} has ${this.stars} stars`
    }
}

let myRepository = new Repository('pokedex', 'gustavol', 'javascript', 5)
console.log(myRepository.getNumberStars())

//Ejemplo 5: Atributos con valores por Default
class PullRequest {
    constructor(repo, title, lines_changed){
        this.repo = repo
        this.title = title
        this.lines_changed = lines_changed
        this.status = 'OPEN'
        this.dateCreated = new Date()
    }

    getInfo(){
        return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
    }
}

let myPR = new PullRequest('pokedex', 'mi first PR', 150)
console.log(myPR.getInfo())
const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99)
console.log(myPR2.getInfo())