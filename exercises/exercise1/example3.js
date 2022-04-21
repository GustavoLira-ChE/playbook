const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
]

//Working with array and objects using methods

// 1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log('1. Imprimir el nombre de los explorers usando forEach'.toUpperCase())
const names = explorers.forEach(explorer => {
    console.log(explorer.name)
})

//2. Imprime el stack de cada explorer, usa FOR EACH
console.log('\n 2. Imprimir el stack de cada explorer usando forEach'.toUpperCase())
explorers.forEach(explorer => {
    console.log(explorer.stack)
})

// 3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log('\n 3. Crear una lista de los stacks de los explorers'.toUpperCase())
const staksList = explorers.map(explorer => explorer.stack)
console.log(staksList)

// 4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log('\n 4. Lista de explorers que tengan js en su stack'.toUpperCase())
const jsExplorers = explorers.filter(explorers => explorers.stack.includes('js'))
console.log(jsExplorers)

//5. Busca el primer explorer que sea de la CDMX, usa FIND
console.log('\n 5. Buscar el primer explorer de CDMX'.toUpperCase())
const CDMXexplorer = explorers.find(explorer => explorer.city === 'CDMX')
console.log(CDMXexplorer)

// 6. Obtén la suma de todos los exercises_completed, usa REDUCE
console.log('\n 6. Obtener la suma de todos los exercises_completed usando reduce'.toUpperCase())
const reducer = (sum, num) => sum + num;
const totalExerciseCompleted = explorers.map(explorer => explorer.exercises_completed).reduce(reducer,0)
console.log(totalExerciseCompleted)

// 7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log('\n 7. Obtener si al menos un explorer ha finalizado sus ejercicios en la misión frontEnd'.toUpperCase())
const exercisesFinished = explorers.some(explorer => explorer.missions.frontend.exercisesFinished === true)
console.log(exercisesFinished)

// 8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
console.log('\n 8. Obtener si todos los explorers tienen la propiedad isFinished del onboarding como true'.toUpperCase())
const isFinished = explorers.every(explorer => explorer.missions.onboarding.isFinished === true)
console.log(isFinished)