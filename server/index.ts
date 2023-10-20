import express from 'express';
import { configureMiddleware, configureRoutes } from './routes';

const port = Bun.env.PORT || 5000

console.log('Starting Express server ...');

const app = express()

configureMiddleware(app)
configureRoutes(app)

app.listen(port, () => {
    console.log(`\n================ \nServer running on port ${port} \n================ \n`)
})