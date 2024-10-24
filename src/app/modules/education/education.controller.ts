import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { EducationServices } from "./education.service";

const createEducation = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await EducationServices.createEducationIntoDB(body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Education added successfully",
    data: result,
  });
});

const getAllEducation = catchAsync(async (req, res) => {
  const result = await EducationServices.getAllEducationFromDB();

  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "education not found",
      data: result,
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "education Retrieved successfully",
    data: result,
  });
});

export const EducationControllers = {
  createEducation,
  getAllEducation,
};
