import express from 'express';
import { configureMiddleware, configureRoutes } from './routes';

const port = Bun.env.PORT || 5000

console.log('Starting Express server ...');

const app = express()

configureRoutes(app)
configureMiddleware(app)

app.listen(port, () => {
    console.log(`\n================ \nServer running on port ${port} \n================ \n`)
})