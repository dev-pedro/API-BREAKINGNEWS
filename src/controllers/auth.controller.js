import {
  loginService,
  genenerateJwtTokenService
} from "../services/authService.js"
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

    const token = genenerateJwtTokenService(user._id)

    res.status(200).send({
      message: `Login successful`,
      token
    })
  } catch (error) {
    res.status(401).send({ message: error.message })
  }
}

export { login }
