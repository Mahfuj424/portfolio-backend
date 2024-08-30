/* eslint-disable @typescript-eslint/no-var-requires */
import catchAsync from "../../utils/catchAsync";
const stripe = require("stripe")(
  "sk_test_51P7dlcB60XUsFAl1MT08t9QOGVFqdQvBNBzJUGWcG6L74e0eQxFWwNhPvNRQy7znNm1a1txc3dB6WwXhGAAZgg9G00EKDY2KHk"
);

const makepaymentController = catchAsync(async (req, res, next) => {
  const { products } = req.body;
  console.log(products);

  const lineItems = products?.map((product) => ({
    price_data: {
      currency: "bdt",
      product_data: {
        name: product?.name,
      },
      unit_amount: product?.price * 100,
    },
    quantity: product?.quantity,
  }));

  const session = await stripe?.checkout?.sessions?.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  res.json({ id: session?.id });
  // const result = await productSerivces.deleteProductFromDB(id);

  // sendResponse(res, {
  //   statusCode: httpStatus.OK,
  //   success: true,
  //   message: "Product Deleted successfully",
  //   data: result,
  // });
});

export default makepaymentController;
