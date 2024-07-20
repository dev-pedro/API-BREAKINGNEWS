import { Schema, model } from "mongoose"

const NewsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  banner: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  comments: {
    type: Array,
    required: true
  },
  likes: {
    type: Array,
    required: true
  }
})

const News = model("News", NewsSchema)

export { News }
