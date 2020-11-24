import dotenv from "dotenv";
import { app } from "./app.js";
import mongoose from "mongoose";
dotenv.config({ path: "./.env" });
const port = process.env.PORT;
const databaseUrl = process.env.MONGO_URI;

// database connect

mongoose
  .connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err.message));

// listen server on port 8000
app.listen(port, () => console.log(`blogs app listening on port ${port}`));
