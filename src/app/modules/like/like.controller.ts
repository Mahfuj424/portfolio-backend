/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// controllers/likeController.ts
import { Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { getAllLikesFromDB } from "./like.service";
import { Blog } from "../blog/blog.model";
import { LikeModel } from "./like.model";

export const toggleLike = async (req: Request, res: Response) => {
  const { userId, blogId } = req.body; // Extract userId and blogId from request body

  try {
    // Check if user has already liked the blog post
    const existingLike = await LikeModel.findOne({
      user: userId,
      blog: blogId,
    });

    if (existingLike) {
      // User already liked the blog, so remove the like
      await LikeModel.deleteOne({ _id: existingLike._id });

      // Remove the like reference from the Blog's 'likes' array
      await Blog.findByIdAndUpdate(blogId, {
        $pull: { likes: existingLike._id },
      });

      // Get the updated blog post and populate the 'likes' field
      const updatedPost = await Blog.findById(blogId).populate({
        path: "likes",
        populate: {
          path: "user",
          select: "name email", // Populate the user info (name, email, etc.)
        },
      });

      // Send response for like removal
      return res.status(httpStatus.OK).json({
        success: true,
        message: "Like removed successfully",
        post: updatedPost,
      });
    }

    // User has not liked the blog, so add the like
    const newLike = await LikeModel.create({
      user: userId,
      blog: blogId,
    });

    // Add the new like reference to the Blog's 'likes' array
    await Blog.findByIdAndUpdate(blogId, {
      $push: { likes: newLike._id },
    });

    // Get the updated blog post and populate the 'likes' field
    const updatedPost = await Blog.findById(blogId).populate({
      path: "likes",
      populate: {
        path: "user",
        select: "name email",
      },
    });

    // Send response for like addition
    return res.status(httpStatus.CREATED).json({
      success: true,
      message: "Like added successfully",
      post: updatedPost,
    });
  } catch (error: any) {
    // Handle any errors
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllLikes = catchAsync(async (req, res, next) => {
  const result = await getAllLikesFromDB();

  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: true,
      message: "not found likes",
      data: result,
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Successfully Retrieved all likes",
    data: result,
  });
});
