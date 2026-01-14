// ============================================
// CREACIÓN DE BASE DE DATOS Y COLECCIONES
// ============================================

// 1. Crear y usar base de datos principal
use('exam_training_db')

// ============================================
// 1. COLECCIÓN: students (Ejercicio 1)
// ============================================

db.createCollection("students")
db.students.insertMany([
  {
    _id: "stu_101",
    name: "Ana García",
    age: 20,
    subjects: ["Math", "Physics", "History"],
    grades: [
      { subject: "Math", grade: 7.5 },
      { subject: "Physics", grade: 8.0 },
      { subject: "History", grade: 9.0 }
    ],
    final_grade: 8.2
  },
  {
    _id: "stu_102",
    name: "Luis Martínez",
    age: 21,
    subjects: ["Math", "Chemistry", "English"],
    grades: [
      { subject: "Math", grade: 9.5 },
      { subject: "Chemistry", grade: 8.5 },
      { subject: "English", grade: 7.0 }
    ],
    final_grade: 8.7
  },
  {
    _id: "stu_103",
    name: "Carlos Ruiz",
    age: 19,
    subjects: ["Biology", "Physics", "English"],
    grades: [
      { subject: "Biology", grade: 8.5 },
      { subject: "Physics", grade: 8.5 },
      { subject: "English", grade: 8.5 }
    ],
    final_grade: 8.5
  },
  {
    _id: "stu_104",
    name: "María López",
    age: 22,
    subjects: ["Math", "History", "Art"],
    grades: [
      { subject: "Math", grade: 9.8 },
      { subject: "History", grade: 9.5 },
      { subject: "Art", grade: 9.0 }
    ],
    final_grade: 9.4
  },
  {
    _id: "stu_105",
    name: "Pedro Sánchez",
    age: 20,
    subjects: ["Chemistry", "Biology", "Physics"],
    grades: [
      { subject: "Chemistry", grade: 7.0 },
      { subject: "Biology", grade: 6.5 },
      { subject: "Physics", grade: 7.5 }
    ],
    final_grade: 7.0
  }
])

// ============================================
// 2. COLECCIÓN: sales (Ejercicio 2)
// ============================================

db.createCollection("sales")
db.sales.insertMany([
  {
    _id: "sale_001",
    salesperson_id: "sp_001",
    salesperson_name: "Juan Pérez",
    date: "2024-03-15",
    amount: 4500,
    product: "Laptop",
    category: "Electronics"
  },
  {
    _id: "sale_002",
    salesperson_id: "sp_002",
    salesperson_name: "María Rodríguez",
    date: "2024-03-16",
    amount: 3200,
    product: "Tablet",
    category: "Electronics"
  },
  {
    _id: "sale_003",
    salesperson_id: "sp_001",
    salesperson_name: "Juan Pérez",
    date: "2024-03-17",
    amount: 8000,
    product: "Server",
    category: "IT Equipment"
  },
  {
    _id: "sale_004",
    salesperson_id: "sp_003",
    salesperson_name: "Carlos Gómez",
    date: "2024-03-18",
    amount: 5400,
    product: "Monitor",
    category: "Electronics"
  },
  {
    _id: "sale_005",
    salesperson_id: "sp_002",
    salesperson_name: "María Rodríguez",
    date: "2024-03-19",
    amount: 4400,
    product: "Printer",
    category: "Office"
  },
  {
    _id: "sale_006",
    salesperson_id: "sp_003",
    salesperson_name: "Carlos Gómez",
    date: "2024-03-20",
    amount: 4400,
    product: "Keyboard",
    category: "Accessories"
  },
  {
    _id: "sale_007",
    salesperson_id: "sp_001",
    salesperson_name: "Juan Pérez",
    date: "2024-03-21",
    amount: 1200,
    product: "Mouse",
    category: "Accessories"
  }
])

// ============================================
// 3. COLECCIÓN: movies (Ejercicio 3)
// ============================================

db.createCollection("movies")
db.movies.insertMany([
  {
    _id: "mov_001",
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    duration: 142,
    genres: ["Drama"],
    rating: 9.3,
    awards: ["Oscar nominations"]
  },
  {
    _id: "mov_002",
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    duration: 175,
    genres: ["Crime", "Drama"],
    rating: 9.2,
    awards: ["Oscar Winner"]
  },
  {
    _id: "mov_003",
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    duration: 152,
    genres: ["Action", "Crime", "Drama"],
    rating: 9.0,
    awards: ["Oscar Winner"]
  },
  {
    _id: "mov_004",
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    duration: 154,
    genres: ["Crime", "Drama"],
    rating: 8.9,
    awards: ["Palme d'Or"]
  },
  {
    _id: "mov_005",
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    duration: 142,
    genres: ["Drama", "Romance"],
    rating: 8.8,
    awards: ["Oscar Winner"]
  },
  {
    _id: "mov_006",
    title: "La La Land",
    director: "Damien Chazelle",
    year: 2016,
    duration: 128,
    genres: ["Drama", "Music", "Romance"],
    rating: 8.0,
    awards: ["Oscar Winner"]
  }
])

// ============================================
// 4. COLECCIÓN: employees (Ejercicio 4)
// ============================================

db.createCollection("employees")
db.employees.insertMany([
  {
    _id: "emp_001",
    name: "Laura Méndez",
    department: "Engineering",
    salary: 45000,
    hire_date: "2020-05-15",
    skills: ["JavaScript", "Node.js", "MongoDB"]
  },
  {
    _id: "emp_002",
    name: "Pedro Gómez",
    department: "Sales",
    salary: 32000,
    hire_date: "2021-02-20",
    skills: ["Negotiation", "CRM"]
  },
  {
    _id: "emp_003",
    name: "Ana Torres",
    department: "Engineering",
    salary: 48000,
    hire_date: "2019-11-10",
    skills: ["Python", "Django", "PostgreSQL"]
  },
  {
    _id: "emp_004",
    name: "Carlos Ruiz",
    department: "HR",
    salary: 35000,
    hire_date: "2022-03-05",
    skills: ["Recruitment", "Training"]
  },
  {
    _id: "emp_005",
    name: "Marta Solís",
    department: "Engineering",
    salary: 42000,
    hire_date: "2021-08-30",
    skills: ["Java", "Spring", "MySQL"]
  },
  {
    _id: "emp_006",
    name: "Jorge Núñez",
    department: "Sales",
    salary: 31000,
    hire_date: "2023-01-15",
    skills: ["Marketing", "Salesforce"]
  },
  {
    _id: "emp_007",
    name: "Sofía Castro",
    department: "Management",
    salary: 60000,
    hire_date: "2018-06-22",
    skills: ["Leadership", "Strategy"]
  },
  {
    _id: "emp_008",
    name: "David López",
    department: "Management",
    salary: 50000,
    hire_date: "2019-04-18",
    skills: ["Finance", "Planning"]
  }
])

// ============================================
// 5. COLECCIÓN: articles (Ejercicio 5)
// ============================================

db.createCollection("articles")
db.articles.insertMany([
  {
    _id: "art_001",
    title: "Introduction to Data Science",
    author: "Ana López",
    publish_date: "2023-05-12",
    category: "Technology",
    read_time: 8,
    tags: ["data", "science", "python"]
  },
  {
    _id: "art_002",
    title: "Machine Learning Trends 2023",
    author: "Carlos Martín",
    publish_date: "2023-08-22",
    category: "AI",
    read_time: 12,
    tags: ["machine learning", "ai", "trends"]
  },
  {
    _id: "art_003",
    title: "History of Modern Art",
    author: "Laura Pérez",
    publish_date: "2022-11-30",
    category: "Art",
    read_time: 15,
    tags: ["art", "history", "culture"]
  },
  {
    _id: "art_004",
    title: "Big Data Analytics in Healthcare",
    author: "Miguel Ángel",
    publish_date: "2024-01-18",
    category: "Health Tech",
    read_time: 10,
    tags: ["big data", "healthcare", "analytics"]
  },
  {
    _id: "art_005",
    title: "Data Visualization Techniques",
    author: "Sara Rodríguez",
    publish_date: "2023-03-05",
    category: "Data",
    read_time: 7,
    tags: ["visualization", "data", "tools"]
  },
  {
    _id: "art_006",
    title: "Climate Change Data Analysis",
    author: "Elena Vargas",
    publish_date: "2022-12-10",
    category: "Environment",
    read_time: 14,
    tags: ["climate", "data", "analysis"]
  }
])

// ============================================
// 6. COLECCIÓN: orders (Ejercicio 6)
// ============================================

db.createCollection("orders")
db.orders.insertMany([
  {
    _id: "ord_001",
    customer_id: "cust_001",
    date: "2024-03-10",
    total_amount: 150.75,
    items: [
      { product_id: "prod_101", name: "Wireless Mouse", category: "Electronics", price: 25.99, quantity: 2 },
      { product_id: "prod_102", name: "Programming Book", category: "Books", price: 49.99, quantity: 1 },
      { product_id: "prod_103", name: "USB Cable", category: "Accessories", price: 9.99, quantity: 4 }
    ]
  },
  {
    _id: "ord_002",
    customer_id: "cust_002",
    date: "2024-03-12",
    total_amount: 89.50,
    items: [
      { product_id: "prod_104", name: "Novel", category: "Books", price: 19.99, quantity: 3 },
      { product_id: "prod_105", name: "Notebook", category: "Books", price: 14.99, quantity: 2 }
    ]
  },
  {
    _id: "ord_003",
    customer_id: "cust_003",
    date: "2024-03-15",
    total_amount: 320.25,
    items: [
      { product_id: "prod_101", name: "Wireless Mouse", category: "Electronics", price: 25.99, quantity: 5 },
      { product_id: "prod_106", name: "Keyboard", category: "Electronics", price: 59.99, quantity: 2 },
      { product_id: "prod_107", name: "Monitor", category: "Electronics", price: 199.99, quantity: 1 }
    ]
  },
  {
    _id: "ord_004",
    customer_id: "cust_001",
    date: "2024-03-18",
    total_amount: 45.00,
    items: [
      { product_id: "prod_108", name: "Science Book", category: "Books", price: 29.99, quantity: 1 },
      { product_id: "prod_109", name: "Pen", category: "Stationery", price: 1.99, quantity: 5 }
    ]
  }
])

// ============================================
// 7. COLECCIÓN: customers (Ejercicio 7)
// ============================================

db.createCollection("customers")
db.customers.insertMany([
  {
    _id: "cust_001",
    name: "Laura Méndez",
    email: "laura.mendez@email.com",
    phone: "+34 600 111 222",
    city: "Madrid",
    join_date: "2022-01-15",
    status: "active"
  },
  {
    _id: "cust_002",
    name: "Pedro Gómez",
    email: "pedro.gomez@email.com",
    phone: "+34 600 333 444",
    city: "Barcelona",
    join_date: "2023-03-22",
    status: "active"
  },
  {
    _id: "cust_003",
    name: "Ana Torres",
    email: "ana.torres@email.com",
    phone: "+34 600 555 666",
    city: "Valencia",
    join_date: "2021-11-05",
    status: "inactive"
  },
  {
    _id: "cust_004",
    name: "Carlos Ruiz",
    email: "carlos.ruiz@email.com",
    phone: "+34 600 777 888",
    city: "Sevilla",
    join_date: "2023-07-10",
    status: "active"
  },
  {
    _id: "cust_005",
    name: "Marta Solís",
    email: "marta.solis@email.com",
    phone: "+34 600 999 000",
    city: "Bilbao",
    join_date: "2020-09-30",
    status: "active"
  }
])

// ============================================
// 8. COLECCIÓN: grades (Ejercicio 8)
// ============================================

db.createCollection("grades")
db.grades.insertMany([
  {
    _id: "grd_001",
    student_id: "stu_201",
    name: "Marta Solís",
    course: "Mathematics",
    grade: 9.5,
    semester: "2024-1",
    professor: "Dr. García"
  },
  {
    _id: "grd_002",
    student_id: "stu_202",
    name: "Jorge Núñez",
    course: "Physics",
    grade: 7.8,
    semester: "2024-1",
    professor: "Dr. Martínez"
  },
  {
    _id: "grd_003",
    student_id: "stu_203",
    name: "Ana López",
    course: "Chemistry",
    grade: 8.9,
    semester: "2024-1",
    professor: "Dr. Rodríguez"
  },
  {
    _id: "grd_004",
    student_id: "stu_204",
    name: "Carlos Martín",
    course: "Biology",
    grade: 6.5,
    semester: "2024-1",
    professor: "Dr. Sánchez"
  },
  {
    _id: "grd_005",
    student_id: "stu_205",
    name: "Laura Pérez",
    course: "History",
    grade: 9.2,
    semester: "2024-1",
    professor: "Dr. Fernández"
  },
  {
    _id: "grd_006",
    student_id: "stu_206",
    name: "Miguel Ángel",
    course: "Programming",
    grade: 8.0,
    semester: "2024-1",
    professor: "Dr. González"
  },
  {
    _id: "grd_007",
    student_id: "stu_207",
    name: "Sara Rodríguez",
    course: "Database Design",
    grade: 7.2,
    semester: "2024-1",
    professor: "Dr. Pérez"
  }
])


//Ejercicio 1
use('exam_training_db')
db.students.find({},{_id: 1, name : 1, final_grade: 1}).sort({final_grade: -1}).skip(2).limit(1)

//Ejercicio 2
use('exam_training_db')
db.sales.aggregate([
    {
        $group:{
            _id: "$salesperson_id",
            totalSales: {$sum:"$amount"}
        }
    }
]).sort({totalSales: -1})

//Ejercicio 3
use('exam_training_db')
db.movies.aggregate([
    {
        $match: {
          rating: {$gt:8.0},
          genres: {$in:["Drama"]}

        }
    },
    {
        $project: {
          _id: 0,
          title: "$title",
          director: "$director",
          duration: "$duration"
        }
    }
])

//Ejercicio 4
use('exam_training_db')
db.employees.aggregate([
    {
        $group: {
          _id: "$department",
          averageSalary: {$avg: "$salary"}
        }
    }
])

//Ejercicio 5
use('exam_training_db')
db.articles.find({ title: {$regex: /Data/} , publish_date: {$gt:"2023-01-01"}},{_id: 0,title: 1, author: 1, publish_date: 1})

//Ejercicio 6
use('exam_training_db')
db.orders.aggregate([
    {
        $unwind:"$items"

    },
    {
        $group: {
          _id: "$items.category",
          totalSold: { $sum: { $multiply: ["$items.price", "$items.quantity"]}}
        },
    }
]).sort({_id : 1})

//Ejercicio 7

use('exam_training_db')
db.orders.aggregate([
    {
        $addFields: {
            itemCount: { $size: "$items" }
        }
    },
    {
        $match: {
            itemCount: { $gte: 3 }
        }
    },
    {
        $lookup: {
            from: "customers",
            localField: "customer_id",
            foreignField: "_id",
            as: "customer_info"
        }
    },
    {
        $unwind: "$customer_info"
    },
    {
        $project: {
            _id: 0,
            customerName: "$customer_info.name",
            totalOrders: "$itemCount",
        }
    }
])

//Ejercicio 8
use('exam_training_db')
db.grades.aggregate([
    {
        $project: {
          _id:0,
          name: "$name",
          category: {
            $switch:{
                branches:[
                    { case: { $gte: ["$grade", 9] }, then: "A" },
                    { case: { $gte: ["$grade", 7] }, then: "B" },
                    { case: { $lt: ["$grade", 7] }, then: "C" }
                ],
                default: "A"
            }
          }
        }
    }
])