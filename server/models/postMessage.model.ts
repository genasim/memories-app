import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    creator: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: false,
        default: []
    },
    selectedFile: {
        type: String,
        required: false,
    },
    likeCount: {
        type: Number,
        required: false,
        default: 0
    },
    createdAt: {
        type: Date,
        required: false,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage