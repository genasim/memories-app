import { Request, Response } from "express"
import PostMessage from "../models/postMessage.model"
import { connectMongo } from "../routes"

const getPosts = async (req: Request, res: Response) => {
    await connectMongo()

    try {
        const postMessages = await PostMessage.find({})

        res.status(200).send(postMessages)
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send({})
    }
}

const createPost = async (req: Request, res: Response) => {
    await connectMongo()

    try {
        const createdMessage = await PostMessage.create(req.body)
        
        res.status(201).send({ message: "Post created", post: createdMessage })
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send({})
    }
}

export default {
    getPosts,
    createPost,
}