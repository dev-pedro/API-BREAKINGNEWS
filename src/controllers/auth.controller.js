import { loginService } from "../services/authService.js"
import bcrypt from "bcrypt"

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await loginService(email)

    if (!user) {
      throw new Error("Email or password is incorrect! Try again.")
    }
    const passwordIsValid = await bcrypt.compare(password, user.password)

    if (!passwordIsValid) {
      throw new Error("Email or password is incorrect! Try again.")
    }

    res.status(200).send({
      message: `Bem vindo(a): ${user.name}`,
      username: user.username,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      background: user.background
    })
  } catch (error) {
    console.error("Error:", error.message)
    res.status(401).send({ message: error.message })
  }
}

export { login }
