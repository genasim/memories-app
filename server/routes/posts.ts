import { Router } from "express";
import postsController from '../controllers/posts'

const router = Router()

router.get('/', postsController.getPosts)
router.post('/', postsController.createPost)

export default router