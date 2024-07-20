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
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  user_id: {
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
  },
  public:{
    type: Boolean,
    default: true,
    required: true
  }
})

const News = model("News", NewsSchema)

export { News }
