use('Biblioteca2')
db.createCollection("libros")   
db.libros.insertMany([
{
"titulo": "El Señor de los Anillos",
"precio": 45,
"cantidad": 50,
"editorial": "Planeta"
},
{
"titulo": "Cien años de soledad",
"precio": 30,
"cantidad": 100,
"editorial": "Sudamericana"
},
{
"titulo": "Aprende MongoDB",
"precio": 55,
"cantidad": 10,
"editorial": "O'Reilly"
},
{
"titulo": "La Sombra del Viento",
"precio": 20,
"cantidad": 50,
"editorial": "Planeta"
},
{
"titulo": "El Principito",
"precio": 15,
"cantidad": 200,
"editorial": "Salamandra"
},
{
"titulo": "Clean Code",
"precio": 42,
"cantidad": 5,
"editorial": "Anaya"
},
{
"titulo": "Don Quijote",
"precio": 40,
"cantidad": 49,
"editorial": "Planeta"
},
{
"titulo": "Harry Potter",
"precio": 25,
"cantidad": 60,
"editorial": "Salamandra"
}
]);
// db.libros.find({})

// 1. $GT(Mayor que n)
// db.libros.find({precio: {$gt:40} })

// 2. &GTE(Mayor o igual que n)
// db.libros.find({precio: {$gte: 50}})

// 3. $NOT(Todos los que no sean n)
// db.libros.find({cantidad: {$not: 50}})

// 4. ENTRE DOS VALORES(Mayor que n y menor que n)
// db.libros.find({precio: {$gt: 20, $lt: 45}})

// 5. EDITORIAL $eq PLANETA(Igual a n)
// db.libros.find({editorial: {$eq: "Planeta"}})

//6. Ordenr alfabetico en orden (A-Z)
// db.libros.find({}).sort({titulo: 1})

//7. Ordenr alfabetico en orden (Z-A)
// db.libros.find({}).sort({titulo: -1})

//8. Count de los documentos.
// db.libros.find({cantidad: {$gt:30}}).count()

//9. Limita y muestra los documentos segun el limite.
// db.libros.find({}).limit(2)

//10. Salta n cantidad de documentos desde el principio del cursor.
// db.libros.find({}).skip(1)

//11.Pon bonito los documentos que se muestren.
// db.libros.find({}).pretty()