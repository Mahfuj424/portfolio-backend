import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SoftSkillsServices } from "./softSkills.service";

const createSoftSkills = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await SoftSkillsServices.createSoftSkillsIntoDB(body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Soft skills added successfully",
    data: result,
  });
});

const getAllSoftSkills = catchAsync(async (req, res) => {
  const result = await SoftSkillsServices.getAllSoftSkillsFromDB();

  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Soft skills not found",
      data: result,
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Soft skills Retrieved successfully",
    data: result,
  });
});

export const SoftSkillsControllers = {
  createSoftSkills,
  getAllSoftSkills,
};
