const express = require("express")
const userRoute = require("./src/routes/user.route")
const app = express()

//db
const connectDataBase = require('./src/database/db')

const door = 3000
connectDataBase()
app.use(express.json())
app.use("/user", userRoute)

// Rota
// Method HTTP - CRUD(REATE, READ, UPDATE, DELETE)
// GET - Pega uma Info
// POST - Cria uma info
// PUT - Atera toda a info
// PATH - Altera parte da info
// DELETE - apaga uma info
// Name - Um identificador da rota
// Function (callback) - Responsável por executar algum comando
/* app.get('/', (req, res) => {
  res.send('Hello World')
}) */

app.listen(door, () => console.log(`Servidor rodando na porta: ${door}`))
