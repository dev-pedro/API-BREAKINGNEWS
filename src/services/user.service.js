import { User } from "../models/User.js"

const createService = (body) => User.create(body)

const findAllService = () => User.find()

const findByIdService = (id) => User.findById(id)

const updateService = (id, body) => User.findOneAndUpdate({ _id: id }, body)

export { createService, findAllService, findByIdService, updateService }
