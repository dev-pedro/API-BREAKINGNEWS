import { News } from "../models/News.js"

const createNewsService = (news) => News.create(news)

const findAllNewsService = () => News.find({ public: true })

const findOneNewsService = (newsId) => News.findById(newsId)

const findOwnersNewsService = (user_id) => News.find({ user_id })

export {
  createNewsService,
  findAllNewsService,
  findOneNewsService,
  findOwnersNewsService
}
