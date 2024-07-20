import { Router } from "express"
import { validUserId, validUser } from "../middlewares/global.middlewares.js"
import {
  createNewUser,
  findUserById,
  findAllUsers,
  updateUser
} from "../controllers/user.controller.js"

const router = Router()

router.post("/", createNewUser) // create a new user
router.get("/", findAllUsers) // get all users
router.get("/:user_id", validUserId, validUser, findUserById) //get user by id
router.patch("/:user_id", validUserId, validUser, updateUser) // update user by id

export { router as userRouter }
