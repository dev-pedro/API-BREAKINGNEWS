import {
  createService,
  findAllService,
  updateService
} from "../services/user.service.js"

const createUser = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body

  try {
    if (!name || !username || !email || !password || !avatar || !background) {
      throw new Error("No fields provided")
    }
    const userBody = await createService(req.body)
    if (!userBody) {
      //return res.status(400).send({ message: "Error creating User" })
    }

    res.status(201).send({
      message: "User created successfuly",
      user: {
        id: userBody._id,
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
      return res.status(500).send(error.message)
    }
  }
}

const findAll = async (req, res) => {
  try {
    const users = await findAllService()
    if (users.leght === 0) {
      throw new Error("No users found")
    }
    res.status(200).send(users)
  } catch (error) {
    if (error.message === "No users found") {
      return res.status(404).send({ message: "No users found" })
    } else {
      return res.status(500).send({ message: "Error retrieving users" })
    }
  }
}

const findById = async (req, res) => {
  const { user } = req
  res.status(200).send(user)
}

const update = async (req, res) => {
  const { id } = req
  const { name, username, email, password, avatar, background } = req.body

  try {
    if (!name && !username && !email && !password && !avatar && !background) {
      throw new Error("No fields provided")
    }

    const updatedUser = await updateService(id, {
      name,
      username,
      email,
      password,
      avatar,
      background
    })
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

export { createUser, findAll, findById, update }
