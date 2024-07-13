import express from "express"
import dotenv from "dotenv"
import { connectDataBase } from "./src/database/db.js"

import { userRouter } from "./src/routes/user.route.js"
import { authRouter } from "./src/routes/auth.route.js"

dotenv.config()

const app = express()
const door = process.env.PORT || 3000 //define access door to API

connectDataBase() //connect to database MongoAtlas

app.use(express.json())

app.use("/user", userRouter) //users routes
app.use("/auth", authRouter) //users routes

app.listen(door, () => console.log(`Servidor rodando na porta: ${door}`))
