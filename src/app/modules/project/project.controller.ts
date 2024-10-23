/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./project.service";

const createProject = catchAsync(async (req, res, next) => {
  const body = req.body;
  const result = await ProjectServices.createProjectIntoDB(body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "project created successfully",
    data: result,
  });
});

export const ProjectControllers = {
  createProject,
};
