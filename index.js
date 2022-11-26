import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";

const PORT = process.env.PORT || 5000
const app = express()

dotenv.config()

app.use(express.json())
app.use(cors());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
})
.then(() => console.log("DB Connected..!"))
.catch(err => console.log(err))


app.listen(process.env.PORT, () => console.log(`Server is up and listening to the ${PORT}`))
app.get('/', (req, res) => res.send("Hello world"))

