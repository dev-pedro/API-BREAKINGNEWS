import { Router } from "express"
import { validId, validUser } from "../middlewares/global.middlewares.js"
import {
  createNewUser,
  findUserById,
  findAllUsers,
  updateUser
} from "../controllers/user.controller.js"

const router = Router()

router.post("/", createNewUser) // create a new user
router.get("/", findAllUsers) // get all users
router.get("/:id", validId, validUser, findUserById) //get user by id
router.patch("/:id", validId, validUser, updateUser) // update user by id

export { router as userRouter }
