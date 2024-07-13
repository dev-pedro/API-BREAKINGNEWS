import mongoose from "mongoose"
import { findByIdService } from "../services/user.service.js"

export const validId = (req, res, next) => {
  const id = req.params.id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log("middleware Invalid ID: " + id)
    return res.status(400).send({ message: "Invalid user ID" })
  }

  next()
}

export const validUser = async (req, res, next) => {
  const id = req.params.id

  try {
    const user = await findByIdService(id)

    if (!user) {
      throw new Error("User not found")
    }

    req.id = id
    req.user = user
  } catch (error) {
    console.error("Error:", error)

    if (error.message === "User not found") {
      return res.status(404).send({ message: "User not found" })
    } else if (
      error.name === "CastError" &&
      error.path === "_id" &&
      error.kind === "ObjectId"
    ) {
      return res.status(400).send({ message: "Invalid user ID" })
    }

    return res.status(500).send({ message: error.message })
  }

  next()
}
/* 
export default {
  validId,
  validUser
}
 */
