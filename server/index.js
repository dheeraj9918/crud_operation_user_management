import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './routes/userRoute.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8000;
const URL = process.env.MONGOURL;
console.log(" connection",URL);

mongoose.connect(URL)
    .then(() => {
        console.log('Database connection successful');
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });


app.use("/api",route)