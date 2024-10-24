import { Router } from "express";
import { BlogControllers } from "./blog.controller";

const router = Router();

router.post("/create-blog", BlogControllers.createBlog);

router.get("/", BlogControllers.getAllBlogs);

router.get("/:blogId", BlogControllers.getBlogById);

router.patch("/:blogId", BlogControllers.updateBlog);

router.delete("/:blogId", BlogControllers.deleteBlog);

export const BlogRoutes = router;
