import { Request, Response } from "express"
import PostMessage from "../models/postMessage.model"
import { connectMongo } from "../routes"

const getPosts = async (req: Request, res: Response) => {
    await connectMongo()

    try {
        const postMessages = await PostMessage.find({})

        if (postMessages.length === 0) {
            res.status(404).json({ message: "Could not find any posts" })
        }

        res.status(200).json({ posts: postMessages })
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json({})
    }
}

const createPost = async (req: Request, res: Response) => {
    await connectMongo()
    
    try {
        const createdMessage = await PostMessage.create(req.body)
        
        res.status(201).json({ message: "Post created", post: createdMessage })
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json({})
    }
}

export default {
    getPosts,
    createPost,
}