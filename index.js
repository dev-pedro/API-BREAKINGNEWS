import express from "express"
import dotenv from "dotenv"
import { connectDataBase } from "./src/database/db.js"

import { authRouter } from "./src/routes/auth.route.js"
import { userRouter } from "./src/routes/user.route.js"
import { newsRouter } from "./src/routes/news.route.js"

dotenv.config()

const app = express()
const door = process.env.PORT || 3000 //define access door to API

connectDataBase() //connect to database MongoAtlas

app.use(express.json())

app.use("/auth", authRouter) //authentcation route
app.use("/user", userRouter) //users routes
app.use("/news", newsRouter) //news routes

app.listen(door, () => console.log(`Servidor rodando na porta: ${door}`))
