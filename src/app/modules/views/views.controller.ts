import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { ViewsServices } from "./views.service";

const createViews = catchAsync(async (req, res) => {
  const { blogId } = req.params;
  const { user } = req.body;
  const result = await ViewsServices.createViewsIntoDB(user, blogId);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "views created successfully",
    data: result,
  });
});

export const ViewsControllers = {
  createViews,
};
