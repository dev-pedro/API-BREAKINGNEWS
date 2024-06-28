const User = require("../models/User")

const createService = (body) => User.create(body)

const findAllService = () => User.find()

const findByIdService = (id) => User.findById(id)

const updateService = (id, body) => User.findOneAndUpdate({_id: id}, body)

module.exports = {
  createService,
  findAllService,
  findByIdService,
  updateService
}
