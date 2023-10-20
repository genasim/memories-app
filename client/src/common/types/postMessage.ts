export interface PostMessage {
    _id?: any
    title?: string
    message?: string
    creator?: string
    tags?: string[]
    selectedFile?: string
    likeCount?: number
    createdAt?: Date
}