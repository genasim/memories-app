import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';

const mongoUrl = Bun.env.MONGODB_URL as string
const port = Bun.env.PORT || 5000

console.log('Starting Express server ...');

const app = express()

app.use(bodyParser.json({ limit: "30mb" }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true, }))
app.use(cors())

try {
    await mongoose.connect(mongoUrl)
    
    app.listen(port, () => {
        console.log(`\n================ \nServer running on port ${port} \n================ \n`)
    })
    
} catch (error) {
    console.log('ERROR -> Could not connect to database \n=======================')
    console.error(error)
    process.exit(1)
}