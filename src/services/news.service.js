import { News } from "../models/News.js"

const createNewsService = (news) => News.create(news)

const findAllNewsService = () => News.find()

const findOneNewsService = (newsId) => News.findById(newsId)

export { createNewsService, findAllNewsService, findOneNewsService}
