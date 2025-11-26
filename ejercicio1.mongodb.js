use("Animes")
// db.createCollection("armas")
// db.createCollection("personajes")

db.personajes.insertMany([
  {_id: 4, nombre: "Saitama", anime: "One Punch Man", poder: 10000, es_humano: true},
  {_id: 5, nombre: "Son Goku", anime: "Dragon Ball", poder: 9000, es_humano: false},
  {_id: 6, nombre: "Satoru Gojo", anime: "Jujutsu Kaisen", poder: 8500, es_humano: true},
  {_id: 7, nombre: "Naruto Uzumaki", anime: "Naruto", poder: 7000, es_humano: true},
  {_id: 8, nombre: "Edward Elric", anime: "Fullmetal Alchemist", poder: 4500, es_humano: true},
  {_id: 9, nombre: "Meliodas", anime: "Seven Deadly Sins", poder: 8600, es_humano: false},
  {_id: 10, nombre: "Eren Jaeger", anime: "Attack on Titan", poder: 5000, es_humano: true},
  {_id: 11, nombre: "Vegeta", anime: "Dragon Ball", poder: 8800, es_humano: false},
  {_id: 12, nombre: "Alucard", anime: "Hellsing", poder: 8200, es_humano: false}
])




db.personajes.find({})

db.personajes.findOne({})

db.personajes.find({anime : "Dragon Ball"})
db.personajes.find({nombre : "Eren Jaeger"})

db.personajes.find({}, {nombre: 1 , poder : 1})

db.personajes.find({}, { _id : 0, nombre: 1 , anime : 1})

db.personajes.find({}, { es_humano : 0})

db.personajes.find({title : "Naruto"}, { _id : 0, nombre: 1})

db.personajes.deleteOne({nombre : "Edward Elric"})
db.personajes.deleteMany({anime : "Dragon Ball"})
db.personajes.deleteMany({poder : 5000})
db.personajes.deleteMany({})