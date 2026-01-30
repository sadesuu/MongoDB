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
        $group: {
          _id: "$publisher",
          totalCopias: { $sum: "$copiesSold"}
        }
    },
    {
      $project: {
        _id: 0,
        publisher: "$_id",
        totalCopias: "$totalCopias"
      }
    },
    {
      $sort: { totalCopias: -1 }
    }
])
//Ejercicio 6
use('juegos')
db.videogames.aggregate([
  {
    $match: {
      rating: {$gt:90},
      releaseYear: { $lt: 2016 }
    }
  },
  {
    $project: {
      _id:0,
      titulo: "$title",
      rating: "$rating",
      año_lanzamiento:"$releaseYear"
    }
  }
])

//Ejercicio 7
use('juegos')
db.videogames.aggregate([
  {
    $group: {
      _id: "$developer.country",
      media_copiasVendidas: {$avg:"$copiesSold"}
    }
  },
  {
    $sort: {
      media_copiasVendidas: -1
    }
  }
])
//Ejercicio 8
use('juegos')
db.videogames.aggregate([
  {
    $unwind: "$genre"
  },
  {
    $sort: {
      copiesSold: -1
    }
  },
  {
    $group: {
      _id: "$genre",
      primerJuego: {$first: "$title"},
      copias: {$first: "$copiesSold"}

    }
  },
  {
    $project: {
      _id: 0,
      genero: "$_id",
      title: "$primerJuego",
      copias: "$copias"
    }
  }
])
//Ejercicio 9
//Muestra los desarrolladores que han creado m ́as de un videojuego en la colecci ́on. Muestra el nombre del
//desarrollador y la cantidad de juegos.
use('juegos')
db.videogames.aggregate([
  {
    $group: {
      _id: "$developer.name",
      cantidad_juegos: { $sum: 1 }
    }
  },
  {
    $match: {
      cantidad_juegos: { $gt: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      desarrollador: "$_id",
      cantidad_juegos: "$cantidad_juegos"
    }
  }
])

//Ejercicio 10
// Calcula el precio total que costar ́ıa comprar todos los videojuegos de cada plataforma. Considera que un juego
// puede estar en m ́ultiples plataformas.
use('juegos')
db.videogames.aggregate([
  {
    $unwind: "$platforms"
  },
  {
    $group: {
      _id: "$platforms",
      precio_total: { $sum: "$price" }
    }
  },
  {
    $project: {
      _id: 0,
      plataforma: "$_id",
      precio_total: {$round: ["$precio_total",2]}
    }
  }
])

//Ejercicio 11
// Encuentra los videojuegos con un precio inferior a 30 y que tengan al menos 2 premios. Muestra el t ́ıtulo, precio
// y n ́umero de premios.
use('juegos')
db.videogames.aggregate([
  {
    $match: {
      price: { $lt: 30 },
      $expr: { $gte: [ { $size: "$awards" }, 2 ] }
    }
  },
  {
    $project: {
      _id: 0,
      titulo: "$title",
      precio: "$price",
      numero_premios: { $size: "$awards" }
    }
  }
])

//Ejercicio 12
// Muestra el a ̃no de lanzamiento con mayor n ́umero de videojuegos publicados. El resultado debe mostrar el a ̃no
// y la cantidad de juegos.
use('juegos')
db.videogames.aggregate([
  {
    $group: {
      _id: "$releaseYear",
      cantidad_juegos: { $sum: 1 }
    }
  },
  {
    $sort: { cantidad_juegos: -1 }
  },
  {
    $limit: 1
  },
  {
    $project: {
      _id: 0,
      anio: "$_id",
      cantidad_juegos: "$cantidad_juegos"
    }
  }
])
//Ejercicio 13
// Calcula el rating promedio de los videojuegos desarrollados por empresas de cada pa ́ıs, pero solo para aquellos
// pa ́ıses que tengan un rating promedio superior a 92.
use('juegos')
db.videogames.aggregate([
  {
    $group: {
      _id: "$developer.country",
      rating_promedio: { $avg: "$rating" }
    }
  },
  {
    $match: {
      rating_promedio: { $gt: 92 }
    }
  },
  {
    $project: {
      _id: 0,
      pais: "$_id",
      rating_promedio: "$rating_promedio"
    }
  }
])
//Ejercicio 14
// Encuentra los videojuegos que contengan la palabra “The” en el t ́ıtulo y que tengan un rating superior a 92.
// Usa una expresi ́on regular y muestra t ́ıtulo, rating y desarrollador.
use('juegos')
db.videogames.aggregate([
  {
    $match: {
      title: { $regex: /The/, $options: 'i' },
      rating: { $gt: 92 }
    }
  },
  {
    $project: {
      _id: 0,
      titulo: "$title",
      rating: "$rating",
      desarrollador: "$developer.name"
    }
  }
])

//Ejercicio 15
// Muestra los 3 g ́eneros con mayor promedio de copias vendidas. Debe aparecer el g ́enero y el promedio de ventas.
use('juegos')
db.videogames.aggregate([
  {
    $unwind: "$genre"
  },
  {
    $group: {
      _id: "$genre",
      promedio_copias_vendidas: { $avg: "$copiesSold" }
    }
  },
  {
    $sort: { promedio_copias_vendidas: -1 }
  },
  {
    $limit: 3
  },
  {
    $project: {
      _id: 0,
      genero: "$_id",
      promedio_copias_vendidas: "$promedio_copias_vendidas"
    }
  }
])
//Ejercicio 16
// Crea una agregaci ́on que muestre el videojuego m ́as caro y el m ́as barato de cada a ̃no de lanzamiento. El
// resultado debe incluir el a ̃no, y para cada uno: t ́ıtulo del juego m ́as caro, su precio, t ́ıtulo del juego m ́as barato
// y su precio.
use('juegos')
db.videogames.aggregate([
  {
    $group: {
      _id: "$releaseYear",
      juego_mas_caro: { $max: "$price" },
      juego_mas_barato: { $min: "$price" },
      titulo_mas_caro: { $first: "$title" },
      titulo_mas_barato: { $first: "$title" }
    }
  },
  {
    $project: {
      _id: 0,
      anio: "$_id",
      titulo_mas_caro: "$titulo_mas_caro",
      precio_mas_caro: "$juego_mas_caro",
      titulo_mas_barato: "$titulo_mas_barato",
      precio_mas_barato: "$juego_mas_barato"
    }
  }
])

//Ejercicio 17
// Usando un cursor, calcula la media del rating de todos los videojuegos desarrollados por “FromSoftware”.
// Muestra el resultado en el siguiente formato: Average rating for FromSoftware games: XX.XX
use('juegos')
// const cursor = db.videogames.find({ "developer.name": "FromSoftware" });
let totalRating = 0;
let count = 0;

while (cursor.hasNext()) {
  const game = cursor.next();
  totalRating += game.rating;
  count++;
}

const averageRating = (totalRating / count).toFixed(2);
print(`Average rating for FromSoftware games: ${averageRating}`);

//Ejercicio 18
use('juegos')
// const cursor = db.videogames.find({"price": {$gt:50}})
while (cursor.hasNext()) {
  const game = cursor.next();
  print(`Title: ${game.title}, Price: ${game.price}`);
}

//Ejercicio 19
use('juegos')
// const cursor = db.videogames.find({}).sort({copiesSold: -1}).limit(1)
while (cursor.hasNext()) {
  const game = cursor.next();
  print(`Best-selling game: ${game.title}, Copies Sold: ${game.copiesSold}`);
}

//Ejercicio 20
// Usando un cursor, cuenta cu ́antos videojuegos hay de cada plataforma. Ten en cuenta que cada videojuego
// puede tener m ́ultiples plataformas. Muestra el resultado con el formato: Platform: XXXXX - Count: XX
use('juegos')
const platformCounts = {};
const cursor = db.videogames.find({});

while (cursor.hasNext()) {
  const game = cursor.next();
  game.platforms.forEach(platform => {
    if (platformCounts[platform]) {
      platformCounts[platform]++;
    } else {
      platformCounts[platform] = 1;
    }
  });
}

for (let platform in platformCounts) {
  print(`Platform: ${platform} - Count: ${platformCounts[platform]}`);
}
