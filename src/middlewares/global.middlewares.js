const mongoose = require("mongoose")
const userService = require("../services/user.service")

const validId = (req, res, next) => {
  const id = req.params.id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid user ID" })
  }

  next()
}

const validUser = async (req, res, next) => {
  const id = req.params.id

  const user = await userService.findByIdService(id)

  if (!user) {
    return res.status(404).send({ message: "User not found" })
  }

  next()
}

module.exports = {
  validId,
  validUser
}
