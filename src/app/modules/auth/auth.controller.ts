/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const createLogin = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const result = await AuthServices.createLoginIntoDB(email, password);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Successfully Login",
    data: result,
  });
});

export const AuthControllers = {
  createLogin,
};
