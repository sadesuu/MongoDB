use("pokemon")


// 1. Encuentra el Pokémon con el tercer HP más alto. Muestra pokedexNumber, name y stats.hp.
use("pokemon")
db.pokemons.aggregate([
    {
        $sort: {"stats.hp": -1}
    },
    {
        $project: {
          pokedexNumber: "$pokedexNumber",
          nombre: "$name",
          hp: "$stats.hp"
        }
    },
    {
        $skip: 2
    },
    {
        $limit: 1
    }
   
])

// 2. Muestra un solo Pokémon que tenga exactamente 102 movimientos (usa $size).
use("pokemon")
db.pokemons.aggregate([
   {
    $project: {
      pokedexNumber:1,
      name:1,
      numMoves:{$size:"$moves"}
    }
   },
   {
    $match: {
      numMoves:102
    }
   },
   {
    $limit: 1
   }
])
// 3. Calcula el promedio de ataque (stats.attack) por generación. Muestra la generación y el promedio.
use("pokemon")
db.pokemons.aggregate([
    {
        $group: {
          _id: "$generation",
          avgPromedio: {$avg:"$stats.attack"}
          
        }
    },
    {
        $project: {
          _id:1,
          ataquePromedio: {$round:["$avgPromedio", 2]}
        }
    },
    {
        $sort: {
          _id: 1
        }
    }
])
// 4. Encuentra todos los Pokémon legendarios y muestra solo el pokedexNumber, name y isLegendary.
use("pokemon")
db.pokemons.aggregate([
    {
        $match: {
          isLegendary: true
        }
    },
    {
        $project: {
          pokedexNumber:1,
          name:1,
          isLegendary:1
        }
    }
])
// 5. Calcula cuántos Pokémon hay de cada tipo principal. Ordena de mayor a menor.
use("pokemon")
db.pokemons.aggregate([
    {
      $unwind: "$types"
    },
    {
        $group: {
          _id: "$types",
         cantPokemon: {$sum:1}
        }
    },
    {
        $sort: {
          cantPokemon: -1
        }
    }
])
// 6. Muestra los Pokémon que tengan velocidad (stats.speed) mayor a 100 y peso menor a 50. Muestra name, stats.speed y weight.
use("pokemon")
db.pokemons.aggregate([
  {
    $match: {
      "$$stats.speed": {$gt:100},
      "$$weight": {$lt:50},

    }
  },
  {
    $project: {
      name:1,
      "stats.speed":1,
      "weight": 1
    }
  }
])
// 7. Agrupa los Pokémon por generación y calcula el promedio de HP de cada generación. Ordena de mayor a menor.
use("pokemon")

// 8. Encuentra el Pokémon más pesado de cada tipo. Muestra el tipo (_id), name y weight.
use("pokemon")

// 9. Encuentra las habilidades ocultas (hidden: true) que aparecen en más de un Pokémon. Muestra el nombre de la habilidad y la cantidad de Pokémon que la tienen.
use("pokemon")

// 10. Calcula el peso total de todos los Pokémon de cada tipo. Ten en cuenta que un Pokémon puede tener varios tipos.
use("pokemon")

// 11. Encuentra los Pokémon que tengan más de 80 en ataque y 2 tipos, siendo uno de ellos 'ground'. Muestra: name, stats.attack y la lista de tipos.
use("pokemon")

// 12. Muestra la generación con más Pokémon creados. Resultado: generación y cantidad de Pokémon.
use("pokemon")

// 13. Calcula el promedio de defensa (stats.defense) por tipo de Pokémon, pero solo muestra los tipos cuyo promedio sea superior a 60.
use("pokemon")

// 14. Encuentra los Pokémon con ataque mayor a 50 y pokedexNumber impar. Muestra name, stats.attack, generación y número de tipos.
use("pokemon")

// 15. Muestra los 3 tipos de Pokémon con mayor promedio de velocidad (stats.speed). Muestra el tipo y el promedio.
use("pokemon")

// 16. Muestra el Pokémon más alto y más bajo de cada generación. Resultado: generación, name y height de más alto y más bajo.
use("pokemon")

// 17. Usando un cursor, calcula la media de defensa (stats.defense) de todos los Pokémon legendarios. Muestra el resultado como: Average defense for legendary Pokémon: XX.XX
use("pokemon")

// 18. Usando un cursor, recorre todos los Pokémon con peso mayor a 100 y muestra: Name: XXXX - Weight: XX.XX
use("pokemon")

// 19. Usando un cursor, encuentra el Pokémon con más movimientos. Muestra name y cantidad de movimientos.
use("pokemon")

// 20. Usando un cursor, cuenta cuántos Pokémon hay por tipo principal (primer elemento de types). Muestra: Type: XXX - Count: XX
use("pokemon")