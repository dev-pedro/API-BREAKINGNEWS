import mongoose from "mongoose"
import { findByIdService } from "../services/user.service.js"
import { findOneNewsService } from "../services/news.service.js"

const validId = (req, res, next) => {
  const id = req.params.id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid Id" })
  }

  next()
}

const validUser = async (req, res, next) => {
  const { id } = req.params

  try {
    const user = await findByIdService(id)

    if (!user) {
      throw new Error("User not found")
    }

    req.id = id
    req.user = user
  } catch (error) {
    if (error.message === "User not found") {
      return res.status(404).send({ message: "User not found" })
    } else {
      return res.status(500).send({ message: error.message })
    }
  }

  next()
}

const validNews = async (req, res, next) => {
  const { id } = req.params

  try {
    const news = await findOneNewsService(id)

    if (!news) {
      throw new Error("News not found")
    }
    req.news = news
  } catch (error) {
    if (error.message === "News not found") {
      return res.status(404).send({ message: "News not found" })
    } else {
      return res.status(500).send({ message: error.message })
    }
  }

  next()
}

export { validId, validUser, validNews }
