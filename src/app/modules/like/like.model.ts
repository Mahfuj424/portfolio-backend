// models/Like.ts
import { model, Schema } from "mongoose";

const LikeSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    blog: { type: Schema.Types.ObjectId, ref: "Blog", required: true },
  },
  { timestamps: true }
);

export const LikeModel = model("Like", LikeSchema);
