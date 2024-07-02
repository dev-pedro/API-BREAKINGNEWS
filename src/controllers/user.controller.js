const userService = require("../services/user.service")

const createUser = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body

  if (!name || !username || !email || !password || !avatar || !background) {
    throw new Erro("No fields provided")
  }

  try {

    const user = await userService.createService(req.body)
    if (!user) {
      return res.status(400).send({ message: "Error creating User" })
    }

    res.status(201).send({
      message: "User created successfuly",
      user: {
        id: user._id,
        name,
        username,
        email,
        avatar,
        background
      }
    })
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).send({ message: "User already exists" })
    } else if (error.message === "No fields provided") {
      res.status(400).send({ message: "Submit all fields for registration" })
    } else {
      return res.status(500).send({ message: "Error creating User" })
    }
  }
}

const findAll = async (req, res) => {
  try {
    const users = await userService.findAllService()
    if (users.leght === 0) {
      return res.status(404).send({ message: "No users found" })
    }
    res.status(200).send(users)
  } catch (error) {
    return res.status(500).send({ message: "Error retrieving users" })
  }
}

const findById = async (req, res) => {
  const id = req.params.id
  try {
    const user = await userService.findByIdService(id)

    /* if (!user) {
      throw new Error("User not found")
    } */

    res.status(200).send(user)
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
}

const update = async (req, res) => {
  const id = req.params.id
  const { name, username, email, password, avatar, background } = req.body

  try {
    if (!name && !username && !email && !password && !avatar && !background) {
      throw new Error("No fields provided")
    }
    /* const user = await userService.findByIdService(id)
    if (!user) {
      throw new Error("User not found")
    } */

    const updatedUser = await userService.updateService(id, {name, username, email, password, avatar, background})
    return res
      .status(200)
      .send({ message: "User successfuly updated!", updatedUser })
  } catch (error) {
    console.error("Error:", error)

    if (error.message === "User not found") {
      return res.status(404).send({ message: "User not found" })
    } else if (error.message === "No fields provided") {
      res.status(400).send({ message: "Submit at one field for update" })
    } else if (
      error.name === "CastError" &&
      error.path === "_id" &&
      error.kind === "ObjectId"
    ) {
      return res.status(400).send({ message: "Invalid user ID" })
    }

    return res.status(500).send(error)
  }
}

module.exports = { createUser, findAll, findById, update }
