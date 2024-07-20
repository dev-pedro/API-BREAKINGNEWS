import mongoose from "mongoose"
import { findByIdService } from "../services/user.service.js"
import { findOneNewsService } from "../services/news.service.js"

const validUserId = (req, res, next) => {
  const { user_id } = req.params

  if (!mongoose.Types.ObjectId.isValid(user_id)) {
    return res.status(400).send({ message: "Invalid Id" })
  }

  next()
}

const validUser = async (req, res, next) => {
  const { user_id } = req.params

  try {
    const user = await findByIdService(user_id)

    if (!user) {
      throw new Error("User not found")
    }

    req.user_id = user_id
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

const validNewsId = (req, res, next) => {
  const { news_id } = req.params

  if (!mongoose.Types.ObjectId.isValid(news_id)) {
    return res.status(400).send({ message: "Invalid Id" })
  }

  next()
}

const validNews = async (req, res, next) => {
  const { news_id } = req.params

  try {
    const news = await findOneNewsService(news_id)

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

export { validUserId, validUser,validNewsId, validNews }
