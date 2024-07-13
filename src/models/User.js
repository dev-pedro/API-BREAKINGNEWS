import { Schema, model } from "mongoose"
import bcrypt from "bcrypt"

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  avatar: {
    type: String,
    required: true
  },
  background: {
    type: String,
    required: true
  }
})

UserSchema.pre("save", async function (next) {
  // Hash the password before saving the user
  this.password = await bcrypt.hash(this.password, 12)
  next()
})

const User = model("User", UserSchema)

export { User }
