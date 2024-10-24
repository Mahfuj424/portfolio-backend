// models/Like.ts
import { model, Schema } from "mongoose";

const ViewsSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Views = model("Views", ViewsSchema);
