// 1. Crear base de datos (se crea automáticamente al usarla)
use('examen_bases_datos')

// 2. Crear colección orders e insertar documentos
db.createCollection("orders")

db.orders.insertMany([
  {
    _id: "order_001",
    customer: { id: "cust_001", name: "Juan Pérez" },
    items: [
      { productId: "prod_001", quantity: 2, price: 15 },
      { productId: "prod_002", quantity: 1, price: 10 }
    ],
    totalPrice: 40,
    date: new Date("2024-05-01")
  },
  {
    _id: "order_002",
    customer: { id: "cust_002", name: "María García" },
    items: [
      { productId: "prod_003", quantity: 1, price: 25 },
      { productId: "prod_004", quantity: 2, price: 10 }
    ],
    totalPrice: 45,
    date: new Date("2024-05-02")
  },
  {
    _id: "order_003",
    customer: { id: "cust_001", name: "Juan Pérez" },
    items: [
      { productId: "prod_005", quantity: 3, price: 8 }
    ],
    totalPrice: 24,
    date: new Date("2024-05-03")
  },
  {
    _id: "order_004",
    customer: { id: "cust_003", name: "Carlos López" },
    items: [
      { productId: "prod_001", quantity: 1, price: 15 },
      { productId: "prod_006", quantity: 1, price: 30 }
    ],
    totalPrice: 44,
    date: new Date("2024-05-04")
  },
  {
    _id: "order_005",
    customer: { id: "cust_002", name: "María García" },
    items: [
      { productId: "prod_007", quantity: 2, price: 20 },
      { productId: "prod_008", quantity: 1, price: 30 }
    ],
    totalPrice: 70,
    date: new Date("2024-05-05")
  },
  {
    _id: "order_006",
    customer: { id: "cust_004", name: "Ana Martínez" },
    items: [
      { productId: "prod_009", quantity: 1, price: 50 }
    ],
    totalPrice: 50,
    date: new Date("2024-05-06")
  },
  {
    _id: "order_007",
    customer: { id: "cust_005", name: "Pedro Sánchez" },
    items: [
      { productId: "prod_002", quantity: 2, price: 10 },
      { productId: "prod_003", quantity: 2, price: 25 },
      { productId: "prod_004", quantity: 4, price: 10 }
    ],
    totalPrice: 110,
    date: new Date("2024-05-07")
  },
  {
    _id: "order_008",
    customer: { id: "cust_003", name: "Carlos López" },
    items: [
      { productId: "prod_010", quantity: 1, price: 100 }
    ],
    totalPrice: 100,
    date: new Date("2024-05-08")
  }
])

// 3. Crear colección products e insertar documentos
db.createCollection("products")

db.products.insertMany([
  {
    _id: "prod_001",
    name: "Laptop",
    category: "Electronics",
    price: 800,
    stock: 10
  },
  {
    _id: "prod_002",
    name: "Mouse",
    category: "Electronics",
    price: 25,
    stock: 50
  },
  {
    _id: "prod_003",
    name: "Smartphone",
    category: "Electronics",
    price: 600,
    stock: 15
  },
  {
    _id: "prod_004",
    name: "Tablet",
    category: "Electronics",
    price: 350,
    stock: 8
  },
  {
    _id: "prod_005",
    name: "Camiseta",
    category: "Fashion",
    price: 20,
    stock: 100
  },
  {
    _id: "prod_006",
    name: "Pantalón",
    category: "Fashion",
    price: 45,
    stock: 60
  },
  {
    _id: "prod_007",
    name: "Zapatos",
    category: "Fashion",
    price: 80,
    stock: 40
  },
  {
    _id: "prod_008",
    name: "Chaqueta",
    category: "Fashion",
    price: 120,
    stock: 25
  },
  {
    _id: "prod_009",
    name: "Auriculares",
    category: "Electronics",
    price: 125,
    stock: 30
  },
  {
    _id: "prod_010",
    name: "Reloj",
    category: "Electronics",
    price: 200,
    stock: 20
  }
])

// 4. Crear colección books e insertar documentos
db.createCollection("books")

db.books.insertMany([
  {
    _id: "book_001",
    title: "The Lord of the Rings",
    author: {
      name: "J.R.R. Tolkien",
      nationality: "British",
      birthYear: 1892
    },
    pages: 1178,
    genre: "Fantasy",
    publishedYear: 1954
  },
  {
    _id: "book_002",
    title: "Harry Potter and the Philosopher's Stone",
    author: {
      name: "J.K. Rowling",
      nationality: "British",
      birthYear: 1965
    },
    pages: 223,
    genre: "Fantasy",
    publishedYear: 1997
  },
  {
    _id: "book_003",
    title: "Pride and Prejudice",
    author: {
      name: "Jane Austen",
      nationality: "British",
      birthYear: 1775
    },
    pages: 432,
    genre: "Classic",
    publishedYear: 1813
  },
  {
    _id: "book_004",
    title: "The Hobbit",
    author: {
      name: "J.R.R. Tolkien",
      nationality: "British",
      birthYear: 1892
    },
    pages: 310,
    genre: "Fantasy",
    publishedYear: 1937
  },
  {
    _id: "book_005",
    title: "1984",
    author: {
      name: "George Orwell",
      nationality: "British",
      birthYear: 1903
    },
    pages: 328,
    genre: "Dystopian",
    publishedYear: 1949
  },
  {
    _id: "book_006",
    title: "Don Quixote",
    author: {
      name: "Miguel de Cervantes",
      nationality: "Spanish",
      birthYear: 1547
    },
    pages: 863,
    genre: "Classic",
    publishedYear: 1605
  },
  {
    _id: "book_007",
    title: "The Great Gatsby",
    author: {
      name: "F. Scott Fitzgerald",
      nationality: "American",
      birthYear: 1896
    },
    pages: 180,
    genre: "Classic",
    publishedYear: 1925
  },
  {
    _id: "book_008",
    title: "War and Peace",
    author: {
      name: "Leo Tolstoy",
      nationality: "Russian",
      birthYear: 1828
    },
    pages: 1225,
    genre: "Historical",
    publishedYear: 1869
  },
  {
    _id: "book_009",
    title: "The Catcher in the Rye",
    author: {
      name: "J.D. Salinger",
      nationality: "American",
      birthYear: 1919
    },
    pages: 234,
    genre: "Fiction",
    publishedYear: 1951
  }
])





//Ejercicio 1
use('examen_bases_datos')

db.orders.find().sort({totalPrice: 1}).skip(3).limit(1)

//Ejercicio 2
use('examen_bases_datos')

db.orders.aggregate([
    {
        $match: {
          _id: "order_007"
        }
    },
    {
        $project: {
          totalQuantity: { $sum: "$items.quantity" }
        }
    }
])

//Ejercicio 3
use('examen_bases_datos')

let totalPrice = 0
let count = 0
let customer = ""

db.orders.find({"customer.id": "cust_002"}).forEach(order =>{
    totalPrice += order.totalPrice
    customer = order.customer.id
    count++
})

const media = count > 0 ? totalPrice / count:0
print(`Average total price for ${customer}: ${media}$`)


//Ejercicio 4 
use('examen_bases_datos')

db.products.aggregate([
    {
        $group: {
            _id: "$category",
            averagePrice: { $avg: "$price" }
        }
    },
    {
        $project: {
            _id: 0,
            category: "$_id",
            averagePrice: 1
        }
    }
]).sort({category: 1})

//Ejercicio 5

use('examen_bases_datos')

db.books.find({
    title: /The/,
    "author.nationality": "British",
    "pages": {$gt:250}
},
{
    _id:0,
    title: 1,
    "author.name": 1,
    pages: 1
}
)