import bodyParser from 'body-parser';
import cors from 'cors';
import { Express } from 'express';
import mongoose from "mongoose";
import postsRouter from './posts';

export const configureRoutes = (app: Express) => {
    app.use('/posts', postsRouter)
}

export const configureMiddleware = (app: Express) => {
    app.use(bodyParser.json({ limit: "30mb" }))
    app.use(bodyParser.urlencoded({ limit: "30mb", extended: true, }))
    app.use(cors())
}

export const connectMongo = async () => {
    if (mongoose.connection.readyState === 1) {
        return
    }

    const connString = Bun.env.MONGODB_URL
    if (!connString) {
        console.error('No MongoDB connection URI provided!');
        return
    }
    
    try {
        await mongoose.connect(connString)
    } catch (error) {
        console.log(' ERROR -> Could not connect to MongoDB')
        console.error(error);
    }
}