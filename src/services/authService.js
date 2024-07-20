import { User } from "../models/User.js"
import jsonwebtoken from "jsonwebtoken"

const genenerateJwtTokenService = (id) =>
  jsonwebtoken.sign({ id }, process.env.SECRET_KEY_JWT, { expiresIn: "24h" })

const loginService = (email) =>
  User.findOne({ email: email }).select("+password")

export { loginService, genenerateJwtTokenService }
