import mongoose from "mongoose"

const connectDataBase = async () => {
  console.log("Wait connecting to database")

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("MongoDB Atlas Connected")
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error)
  }
}

export { connectDataBase }
