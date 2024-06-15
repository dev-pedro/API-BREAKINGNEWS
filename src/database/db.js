const mongoose = require("mongoose")

const connectDataBase = () => {
  console.log("Wait connecting to database ")

  mongoose
    .connect(
      "mongodb+srv://root:IabTYqFJh9t7nJO4@cluster0.6z8xrq2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MogoDB Atlas Connected"))
    .catch((error) => console.log(error))
}

module.exports = connectDataBase
