import { Router } from "express"
import {
  createNews,
  findAllNews,
  findOneNews
} from "../controllers/news.controller.js"
import { validId, validNews } from "../middlewares/global.middlewares.js"

const router = Router()

router.post("/create", createNews)
router.get("/", findAllNews)
router.get("/:id", validId, validNews, findOneNews)

export { router as newsRouter }
