import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { TechSkillsServices } from "./techSkills.service";

const createTechSkills = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await TechSkillsServices.createTechSkillsIntoDB(body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Tech skills added successfully",
    data: result,
  });
});

const getAllTechSkills = catchAsync(async (req, res) => {
  const result = await TechSkillsServices.getAllTechSkillsFromDB();

  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Tech skills not found",
      data: result,
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Tech skills Retrieved successfully",
    data: result,
  });
});

export const TechSkillsControllers = {
  createTechSkills,
  getAllTechSkills,
};
