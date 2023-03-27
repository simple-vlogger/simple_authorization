import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import Auth from "./routes/Auth.js"

// configuration 
const port = process.env.PORT || 2000
const app = express()
dotenv.config()

// function middlewares
app.use(express.json())
app.use(cors({ origin: "*" }))

// connect to mongo

const connectMongo = async () => {
       await mongoose.connect(process.env.MONGO_URL)
              .then(() => console.log("Mongo active ✅"))
              .catch(err => console.log(err))
}

// routes
app.use("/api/auth", Auth)

// listen port
app.listen(port, () => {
       try {
              connectMongo()
              console.log(`Server is running on port ${port}`)
       } catch (error) {
              console.log("Dasturda muammo mavjud ❌")
       }
})