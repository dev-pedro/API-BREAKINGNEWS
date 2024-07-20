import { Router } from "express"
import {
  createNews,
  findAllNews,
  findOneNews,
  findOwnersNews
} from "../controllers/news.controller.js"
import { validNewsId, validNews, validUserId } from "../middlewares/global.middlewares.js"

const router = Router()

router.post("/create", createNews)
router.get("/", findAllNews)
router.get("/:news_id", validNewsId, validNews, findOneNews)
router.get("/owners/:user_id", validUserId, findOwnersNews)

export { router as newsRouter }
