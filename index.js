const express = require("express")
const userRoute = require("./src/routes/user.route")
const app = express()

app.use("/soma", userRoute)

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

app.listen(3000)
