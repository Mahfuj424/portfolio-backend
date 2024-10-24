import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ExperienceServices } from "./experience.service";

const createExperience = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await ExperienceServices.createExperienceIntoDB(body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experience added successfully",
    data: result,
  });
});

const getAllExperience = catchAsync(async (req, res) => {
  const result = await ExperienceServices.getAllExperienceFromDB();

  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Experience not found",
      data: result,
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experience retrieved successfully",
    data: result,
  });
});

export const ExperienceControllers = {
  createExperience,
  getAllExperience,
};
