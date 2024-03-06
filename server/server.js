import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from "./routes/book.routes.js";

const app = express();
//use the Cors library to enable requests from additional origins.
app.use(express.json(), cors());

app.use("/api", router);

dotenv.config();

const{PORT, DB_NAME} = process.env;


dbConnect(DB_NAME);
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);