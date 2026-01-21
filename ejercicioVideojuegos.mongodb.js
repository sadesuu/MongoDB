use('juegos')
db.createCollection('videogames')
db.videogames.insertMany([
  {
    _id: "vg_001",
    title: "The Legend of Zelda: Breath of the Wild",
    developer: {
      name: "Nintendo EPD",
      country: "Japan",
      founded: 2015
    },
    publisher: "Nintendo",
    releaseYear: 2017,
    genre: ["Action", "Adventure"],
    platforms: ["Nintendo Switch", "Wii U"],
    price: 59.99,
    rating: 97,
    copiesSold: 31.61,
    awards: ["Game of the Year 2017", "Best Game Direction"]
  },
  {
    _id: "vg_002",
    title: "The Witcher 3: Wild Hunt",
    developer: {
      name: "CD Projekt Red",
      country: "Poland",
      founded: 2002
    },
    publisher: "CD Projekt",
    releaseYear: 2015,
    genre: ["RPG", "Action"],
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    price: 39.99,
    rating: 93,
    copiesSold: 50.00,
    awards: ["Game of the Year 2015", "Best RPG"]
  },
  {
    _id: "vg_003",
    title: "Red Dead Redemption 2",
    developer: {
      name: "Rockstar Studios",
      country: "USA",
      founded: 1998
    },
    publisher: "Rockstar Games",
    releaseYear: 2018,
    genre: ["Action", "Adventure"],
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    price: 59.99,
    rating: 97,
    copiesSold: 55.00,
    awards: ["Best Narrative", "Best Audio Design"]
  },
  {
    _id: "vg_004",
    title: "God of War",
    developer: {
      name: "Santa Monica Studio",
      country: "USA",
      founded: 1999
    },
    publisher: "Sony Interactive Entertainment",
    releaseYear: 2018,
    genre: ["Action", "Adventure"],
    platforms: ["PlayStation 4", "PC"],
    price: 49.99,
    rating: 94,
    copiesSold: 23.00,
    awards: ["Game of the Year 2018", "Best Action Game"]
  },
  {
    _id: "vg_005",
    title: "Minecraft",
    developer: {
      name: "Mojang Studios",
      country: "Sweden",
      founded: 2009
    },
    publisher: "Microsoft",
    releaseYear: 2011,
    genre: ["Sandbox", "Survival"],
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch", "Mobile"],
    price: 26.95,
    rating: 93,
    copiesSold: 238.00,
    awards: ["Best Indie Game", "Most Influential Game"]
  },
  {
    _id: "vg_006",
    title: "Dark Souls III",
    developer: {
      name: "FromSoftware",
      country: "Japan",
      founded: 1986
    },
    publisher: "Bandai Namco",
    releaseYear: 2016,
    genre: ["RPG", "Action"],
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    price: 39.99,
    rating: 89,
    copiesSold: 10.00,
    awards: ["Best RPG 2016"]
  },
  {
    _id: "vg_007",
    title: "Super Mario Odyssey",
    developer: {
      name: "Nintendo EPD",
      country: "Japan",
      founded: 2015
    },
    publisher: "Nintendo",
    releaseYear: 2017,
    genre: ["Platformer", "Adventure"],
    platforms: ["Nintendo Switch"],
    price: 59.99,
    rating: 97,
    copiesSold: 26.95,
    awards: ["Best Family Game", "Best Action/Adventure"]
  },
  {
    _id: "vg_008",
    title: "Elden Ring",
    developer: {
      name: "FromSoftware",
      country: "Japan",
      founded: 1986
    },
    publisher: "Bandai Namco",
    releaseYear: 2022,
    genre: ["RPG", "Action"],
    platforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
    price: 59.99,
    rating: 96,
    copiesSold: 25.00,
    awards: ["Game of the Year 2022", "Best Game Direction"]
  },
  {
    _id: "vg_009",
    title: "Grand Theft Auto V",
    developer: {
      name: "Rockstar North",
      country: "UK",
      founded: 1988
    },
    publisher: "Rockstar Games",
    releaseYear: 2013,
    genre: ["Action", "Adventure"],
    platforms: ["PC", "PlayStation 3", "PlayStation 4", "PlayStation 5", "Xbox 360", "Xbox One", "Xbox Series X/S"],
    price: 29.99,
    rating: 97,
    copiesSold: 190.00,
    awards: ["Best Technical Achievement", "Best Soundtrack"]
  },
  {
    _id: "vg_010",
    title: "The Last of Us Part II",
    developer: {
      name: "Naughty Dog",
      country: "USA",
      founded: 1984
    },
    publisher: "Sony Interactive Entertainment",
    releaseYear: 2020,
    genre: ["Action", "Adventure"],
    platforms: ["PlayStation 4", "PlayStation 5"],
    price: 59.99,
    rating: 93,
    copiesSold: 10.00,
    awards: ["Game of the Year 2020", "Best Narrative", "Best Audio Design"]
  },
  {
    _id: "vg_011",
    title: "Hollow Knight",
    developer: {
      name: "Team Cherry",
      country: "Australia",
      founded: 2014
    },
    publisher: "Team Cherry",
    releaseYear: 2017,
    genre: ["Metroidvania", "Platformer"],
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    price: 14.99,
    rating: 90,
    copiesSold: 5.00,
    awards: ["Best Indie Game 2017"]
  },
  {
    _id: "vg_012",
    title: "Hades",
    developer: {
      name: "Supergiant Games",
      country: "USA",
      founded: 2009
    },
    publisher: "Supergiant Games",
    releaseYear: 2020,
    genre: ["Roguelike", "Action"],
    platforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S", "Nintendo Switch"],
    price: 24.99,
    rating: 93,
    copiesSold: 3.00,
    awards: ["Best Indie Game 2020", "Best Game Design"]
  },
  {
    _id: "vg_013",
    title: "Sekiro: Shadows Die Twice",
    developer: {
      name: "FromSoftware",
      country: "Japan",
      founded: 1986
    },
    publisher: "Activision",
    releaseYear: 2019,
    genre: ["Action", "Adventure"],
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    price: 59.99,
    rating: 90,
    copiesSold: 10.00,
    awards: ["Game of the Year 2019", "Best Action Game"]
  },
  {
    _id: "vg_014",
    title: "Celeste",
    developer: {
      name: "Maddy Makes Games",
      country: "Canada",
      founded: 2016
    },
    publisher: "Maddy Makes Games",
    releaseYear: 2018,
    genre: ["Platformer"],
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    price: 19.99,
    rating: 94,
    copiesSold: 2.00,
    awards: ["Best Indie Game 2018", "Best Game Design"]
  },
  {
    _id: "vg_015",
    title: "Horizon Zero Dawn",
    developer: {
      name: "Guerrilla Games",
      country: "Netherlands",
      founded: 2000
    },
    publisher: "Sony Interactive Entertainment",
    releaseYear: 2017,
    genre: ["Action", "RPG"],
    platforms: ["PlayStation 4", "PC"],
    price: 49.99,
    rating: 89,
    copiesSold: 20.00,
    awards: ["Best Original Game"]
  }
]);



//Ejercicio 1
use('juegos')
db.videogames.find({}).sort({ranking: -1}).limit(3)

//Ejercicio 2
use('juegos')
db.videogames.aggregate([
    {
        $match:{
            _id: "vg_005"
        }
    },
    {
        $project: {
          "_id": "$_id",
          "totalPlatforms": {$size:"$platforms"}
        }
    }
])

//Ejercicio 3
use('juegos')
db.videogames.aggregate([
    {
        $unwind:"$genre"
    
    },
    {
        $group: {
          _id: "$genre",
          precio: {$avg:"$price"}
        }
    },

    {
        $project: {
          _id: 0,
          genero: "$_id",
          precio: "$precio"
        }
    }

])

//Ejercicio 4
use('juegos')
db.videogames.aggregate([
    {
        $match: {
            "developer.country": "Japan"
        }
    },
    {
        $project: {
          _id: 0,
          titulo: "$title",
          autor: "$developer.name"
        }
    }
])

//Ejercicio 5
use('juegos')
db.videogames.aggregate([
    {
        $match: {
          
        }
    },
])
//Ejercicio 6
use('juegos')

//Ejercicio 7
use('juegos')

//Ejercicio 8
use('juegos')

//Ejercicio 9
use('juegos')

//Ejercicio 10
use('juegos')

//Ejercicio 11
use('juegos')

//Ejercicio 12
use('juegos')

//Ejercicio 13
use('juegos')

//Ejercicio 14
use('juegos')

//Ejercicio 15
use('juegos')

//Ejercicio 16
use('juegos')

//Ejercicio 17
use('juegos')

//Ejercicio 18
use('juegos')

//Ejercicio 19
use('juegos')

//Ejercicio 20
use('juegos')
