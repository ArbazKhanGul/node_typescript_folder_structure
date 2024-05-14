import express from 'express';
import { myDataSource } from "./config/app-data-source"
import errorMiddleware from './middleware/errorMiddleware';
require("dotenv").config();
import cors from "cors";
import auth from "../src/routes/authRoute";

const app = express();
app.use(
    cors({
      origin: ["*", process.env.CLIENT_URL || ""],
      credentials: true,
    })
  );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

// Routes
app.use('/api/auth', auth);

app.get('/', (req, res) => { 
    res.send('listening');
})

//Error Handling
app.use(errorMiddleware);

app.listen(3000, () => {
    console.log('listening on port 3000');
})