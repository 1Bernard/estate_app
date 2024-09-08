import express from "express";
import dotenv from "dotenv";

import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6000;

app.use(express.json());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
// app.use("/api/posts", postRoute);

app.listen(PORT, () => console.log('Server is running on port:', PORT));