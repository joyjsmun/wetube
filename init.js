import {videos} from "./db";
import app from "./app";

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const PORT = process.env.PORT;


const handleListening = () => console.log(`✅  Listening on: http://localhost:${PORT}`);

app.listen(PORT,handleListening);