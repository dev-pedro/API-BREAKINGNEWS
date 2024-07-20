import {
  createNewsService,
  findAllNewsService
} from "../services/news.service.js"

const createNews = async (req, res) => {
  const user = {
    user_id: "66927adc1201da8230438928",
    author: "Pedro Henrique"
  }
  const newsBody = req.body

  try {
    const news = { ...user, ...newsBody }

    const newsResult = await createNewsService(news)

    res.status(201).send(newsResult)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const findAllNews = async (req, res) => {
  try {
    const news = await findAllNewsService()
    if (news.length === 0) {
      throw new Error("No news found")
    }
    res.status(200).send(news)
  } catch (error) {
    if (error.message === "No news found") {
      return res.status(404).send({ message: "No news found" })
    } else {
      return res.status(500).send({ message: error.message })
    }
  }
}

const findOneNews = async (req, res) => {
  const { news } = req
  res.status(200).send(news)
}

export { createNews, findAllNews, findOneNews }
