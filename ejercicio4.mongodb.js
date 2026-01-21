use('PruebasCursor')
db.createCollection('cursor')

// Inserts de ejemplo para la colección cursor
db.cursor.insertMany([
    { nombre: "Juan", edad: 25, ciudad: "Madrid", profesion: "Ingeniero" },
    { nombre: "María", edad: 30, ciudad: "Barcelona", profesion: "Doctora" },
    { nombre: "Pedro", edad: 22, ciudad: "Valencia", profesion: "Estudiante" },
    { nombre: "Ana", edad: 28, ciudad: "Madrid", profesion: "Diseñadora" },
    { nombre: "Luis", edad: 35, ciudad: "Sevilla", profesion: "Profesor" },
    { nombre: "Carmen", edad: 27, ciudad: "Barcelona", profesion: "Abogada" },
    { nombre: "José", edad: 40, ciudad: "Madrid", profesion: "Arquitecto" },
    { nombre: "Laura", edad: 23, ciudad: "Bilbao", profesion: "Programadora" },
    { nombre: "Carlos", edad: 32, ciudad: "Valencia", profesion: "Ingeniero" },
    { nombre: "Sofía", edad: 29, ciudad: "Madrid", profesion: "Médica" }
])


use('PruebasCursor')
db.cursor.find({}).forEach(order =>{
    print(`El nombre de esta persona es ${order.nombre}`)
})

