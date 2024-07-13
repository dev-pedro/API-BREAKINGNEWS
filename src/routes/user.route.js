import { Router } from "express"
import { validId, validUser } from "../middlewares/global.middlewares.js"
import {
  createUser,
  findById,
  findAll,
  update
} from "../controllers/user.controller.js"

const router = Router()

router.post("/", createUser)
router.get("/", findAll)
router.get("/:id", validId, validUser, findById)
router.patch("/:id", validId, validUser, update)

export { router as userRouter }
